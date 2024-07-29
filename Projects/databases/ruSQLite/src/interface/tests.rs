use crate::interface::database::CollSeq;
#[cfg(test)]

use crate::interface::database::{ CollSeqVector, Rusqlite, Zname };

#[test]
fn it_creates_a_collation_sequence() {
	let mut db = Rusqlite::new("filename".to_string());
	db.open();
	assert!(db.a_coll_seq.z_name == Zname::BINARY);
	assert!(matches!(db.a_coll_seq.hash.get(&Zname::BINARY), Some(CollSeq) ));

}
