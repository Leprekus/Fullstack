	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 12, 0	sdk_version 13, 1
	.globl	_scheme_entry                   ; -- Begin function scheme_entry
	.p2align	2
_scheme_entry:                          ; @scheme_entry
	.cfi_startproc
; %bb.0:
	mov	w0, #42
	ret
	.cfi_endproc
                                        ; -- End function
.subsections_via_symbols
