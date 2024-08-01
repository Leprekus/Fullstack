const assert = @import("std").debug.assert;

const Ziglite = @import("types.zig").Ziglite;
const CollSeq = @import("types.zig").CollSeq;

const Encoding = enum {
	UTF8,
	UTF16
};
const ZName = enum {
	NONE,
	BINARY
};

const StatusCodes = enum {
	OK,
};

fn create_collation(
	db: *Ziglite, // DB connection to search
	z_name: ZName,
	enc: Encoding, // encodinng to use
	) StatusCodes {
	
	find_coll_seq(&db, enc, z_name, true);
	return StatusCodes.OK;
}

fn find_coll_seq(
	db: *Ziglite, // DB connection to search
	enc: Encoding, // Text encoding
	z_name: ZName, // Name of collating sequence
	create: bool, // Create if true and CollSeq doesn't already exist
) *CollSeq {
	
	assert((enc >= Encoding.UTF8) & & (enc <= Encoding.UTF16));
	switch(z_name) {
		ZName.BINARY => {
			find_coll_seq_entry(db, z_name, create);
		},
		ZName.NONE => {},
	}

	return &CollSeq{};
}

fn find_coll_seq_entry(
	db: *Ziglite,
	z_name: ZName,
	create: bool,
) void {

}