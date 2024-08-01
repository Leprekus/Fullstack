# Definitions
**page table**: A Data structure that is used by virtual memory to map virtual addresses to physical addresses.
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Virtual_address_space_and_physical_address_space_relationship.svg/640px-Virtual_address_space_and_physical_address_space_relationship.svg.png' alt='page table image'/>

**page**: in this context a memory page referred to as page is a fixed length contigouous block of memory. It has a sinle entry in the **page table**. A page is the smallest unit of data for memory management the OS's virtual memory.

# Allocators

usage: ```zig const memory = std.heap.<allocator>(<type>, <units>);```

**std.heap.page_allocator**: asks OS entire pages of memory. Downsides: innefficient and slow. used for low level tasks when that require pages as memory blocks.

**std.heap.FixedBufferAllocator**: allocates memory to a fixed buffer, does not make heap allocations. Used when heap usage is not wanted or performance reasons.

**std.head.ArenaAllocator**: takes child allocator. Allocates many times and frees all memory once.
```zig const arena = std.head.AreanaAllocator.init(<allocator>);
const allocator = arena.allocator();
allocator.alloc(<type>, <units>);
defer arena.deinit(); // frees all the memory
```
**std.heap.GeneralPurposeAllocator**: safe allocator used for general purposes.

## Allocator Error handling


All allocators are used along with defer ```zig std.heap.<allocator>.free(memory)```

