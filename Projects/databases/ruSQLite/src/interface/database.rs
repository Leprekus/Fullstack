use std::{
    collections::HashMap,
    hash::Hash,
};
pub(crate) enum RusqliteStatusCodes {
    OK,
	//NOMEM,

}
pub(crate) enum RusqliteEncoding {
    UTF8,
    UTF16,
}
#[derive(PartialEq, Eq, Hash, Clone, Copy)]
pub(crate) enum Zname {
    NONE,
    BINARY,
}

pub(crate) struct CollSeq {
    pub(crate) z_name: Zname,
    pub(crate) encoding: RusqliteEncoding,
    pub(crate) p_user: i32, // First argument to xCmp()
    pub(crate) x_cmp: i32,
    pub(crate) x_del: i32, // Destructor for p_user
}

pub(crate) type CollSeqVector = Vec<CollSeq>;
pub(crate) struct ACollSeq {
    pub(crate) z_name: Zname,
    pub(crate) hash: HashMap<Zname, CollSeqVector>,
}
pub struct Rusqlite {
    //p_dflt_coll: Coll_seq,
    pub(crate) a_coll_seq: ACollSeq, // All collating sequences
}

impl Rusqlite {

    pub fn new(
        
        filename: String, // DB filename utf-8 enconded
    ) -> Self {
        //TODO: handle implement mutex subsystem,
        //TODO: implement createCollation(): define how chars relate when ordered
        //TODO: implement sqlite3ParseUri(): trigger error with non-sense filename combinations
        //Following functions are to open backend db driver
        //TODO: implement sqlite3BTreeOpen()
        //TODO: implement sqlite3BTreeEnter()
        //TODO: implement sqlite3SchemaGet()
        //TODO: implement sqlite3SetTextEncoding()
        //TODO: implement sqlite3BTreeLeave()
		Rusqlite{
			a_coll_seq: ACollSeq{
				z_name: Zname::NONE,
				hash: HashMap::new()
			}
		}
    }
	pub fn open(&mut self) -> &mut Self {
		self.create_collation(Zname::BINARY, RusqliteEncoding::UTF8);
        self.create_collation(Zname::BINARY, RusqliteEncoding::UTF16);
		self
	}

    
}
