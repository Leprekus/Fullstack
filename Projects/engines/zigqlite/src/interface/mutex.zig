const std = @import("std");

const ZIGQLITE_STATUS = @import("constants.zig").ZIGQLITE_STATUS;
const ZIGQLITE_MUTEX = @import("constants.zig").ZIGQLITE_MUTEX;

const zigqlite_mutex = struct {
	thread: std.Thread,
};
const zigqlite_default_mutex = struct {
	thread: std.Thread,
	fn pthreadMutexInit() ZIGQLITE_STATUS { return ZIGQLITE_STATUS.OK; }
	fn pthreadMutexEnd() ZIGQLITE_STATUS { return ZIGQLITE_STATUS.OK; }
	fn pthreadMutexAlloc(iType: ZIGQLITE_MUTEX) zigqlite_mutex {
		switch (iType) {
			ZIGQLITE_MUTEX.RECURSIVE => {
				//TODO: implement once memory subsystem's been implemented
			},
			ZIGQLITE_MUTEX.FAST => {
				//TODO: implement once memory subsystem's been implemented
			},

		}
	}

};
