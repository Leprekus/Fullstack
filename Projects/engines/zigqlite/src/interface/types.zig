const std = @import("std");
const zigqlite_mutex = struct {
	mutex: std.Thread
};
const mutexMethods = struct {
	fn xMutexInit(arg: i32) void { arg; }
	fn xMutexEnd(arg: i32) void { arg; }
	fn xMutexAlloc(arg: i32) i32 { arg; return 0; }
	fn xMutexFree() zigqlite_mutex { return zigqlite_mutex{}; }
	fn xMutexEnter() zigqlite_mutex { return zigqlite_mutex{}; }
	fn xMutexTry(arg: i32) zigqlite_mutex{ arg; return zigqlite_mutex{}; }
	fn xMutexLeave() zigqlite_mutex { return zigqlite_mutex{}; }
	fn xMutexHeld(arg: i32) zigqlite_mutex { arg; return zigqlite_mutex{}; }
	fn xMutextNotheld(arg: i32) zigqlite_mutex { arg; return zigqlite_mutex{}; }
};
pub const zigqliteGlobalConfig = struct {
	mutex: mutexMethods
};
pub const zigqlite = struct {

	fn initialize () i32{
		//TODO: set until the very end GlobalConfig.init to true

		// Initalize mutex subsystem.
		// Return with early error if unable to initialize.
		// Mutex subsystem takes care of its own initialization
		const rc: i32 = inti
		return 0;
	}
	pub fn open(self: *zigqlite) void {
		self;
	}
};