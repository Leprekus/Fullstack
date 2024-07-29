
use std::collections::HashMap;
use crate::interface::database::{Rusqlite, Zname, RusqliteEncoding, RusqliteStatusCodes, CollSeq, CollSeqVector};
use super::database::ACollSeq;

impl Rusqlite {
	pub(crate) fn create_collation(
        &mut self, // DB connection to search
        z_name: Zname,
        encoding: RusqliteEncoding, // target text encoding
    ) -> RusqliteStatusCodes {
        //TODO: check for existing collation sequences and active vms
        //TODO: invalidate statements if no active vms
        //TODO: if sequence created by create_collation() invalidate any sequences created by synthCollSeq()

        //...
        self.find_coll_seq(encoding, z_name, true);
        /*
            if(self.a_coll_seq failed)
                return RUSQLITE_NOMEM_BKPT
        */

        RusqliteStatusCodes::OK
    }
    /**
     * if the entry specified is not found and create is true,
     * then create new entry.
     */
    pub(crate) fn find_coll_seq(
        &mut self,                   // DB connection to search
        encoding: RusqliteEncoding, // Text encoding
        z_name: Zname,              // Name of collating sequence
        create: bool,                // True to create CollSeq if it doesn't already exist
    ) {
		//TODO: handle NOMEM
		
        match z_name {
            Zname::BINARY => {
                self.find_coll_seq_entry(z_name, create);
            }
            Zname::NONE => {
                //self.p_dflt_coll;
            }
        }
    }

    /**
     * Locate and return entry from db.a_coll_seq hash table if the entry
    specified by z_name and n_name is not found and create is true,
    create a new entry.

    each rusqlite.a_coll_seq hash table contains an array of two Coll_seq
    1. contains collation sequence for utf-8
    2. contains collation sequence for utf-16

    immediately after two collation sequences is a copy of the collation sequence name
    each structure stores a pointer to this string.
     */
    pub(crate) fn find_coll_seq_entry(
        &mut self,      // DB connection
        z_name: Zname, // Name of collating sequence
        create: bool,   // Create new entry if true
    ) -> Option<&CollSeqVector> {

        let contains_key = self.a_coll_seq.hash.contains_key(&z_name);

        if !contains_key && create {
        
			self.a_coll_seq.z_name = z_name;
			self.a_coll_seq.hash.insert(z_name, Vec::with_capacity(2));

			if let Some(v) = self.a_coll_seq.hash.get_mut(&z_name){
				v.push(CollSeq {
					z_name,
					encoding: RusqliteEncoding::UTF8,
					p_user: 0,
					x_cmp: 0,
					x_del: 0,
				});

				v.push(CollSeq {
					z_name,
					encoding: RusqliteEncoding::UTF16,
					p_user: 0,
					x_cmp: 0,
					x_del: 0,
				});
			}

        }
		self.a_coll_seq.hash.get(&z_name)
    }
}