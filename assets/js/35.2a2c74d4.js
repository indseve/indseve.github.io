(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{595:function(s,t,a){s.exports=a.p+"assets/img/02-1.29737383.jpg"},712:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("img",{attrs:{src:a(595),alt:"image"}})]),s._v(" "),e("p",[s._v("既然这篇叫文件系统概述，那我们就来说一下什么是文件系统。我没有查阅有没有教科书的定义，从操作系统概念上讲，文件系统可以说与进程调度、内存管理等子系统并驾齐驱的一大子系统，主要负责数据的组织、存储与检索。它不是指一个实体的存储设备，而是指管理存储数据的格式与方法。")]),s._v(" "),e("h2",{attrs:{id:"文件系统和存储组织形式的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件系统和存储组织形式的关系"}},[s._v("#")]),s._v(" 文件系统和存储组织形式的关系")]),s._v(" "),e("p",[s._v("我记得知乎上曾有人问分区表和文件系统有什么关系，我当时就简单的回答了一句“没有任何关系”。分区表代表的对存储设备分区域管理的概念，分区之后的每一块区域对于文件系统来说都是独立的存储设备，本地文件系统（如ExtN, XFS, NTFS等）都是架设在一块或几块（如果有子卷管理）存储设备上的，对分区表没有任何要求。比如你有一块磁盘或U盘显示为/dev/sdb，你可以在/dev/sdb上直接做文件系统然后挂载/dev/sdb：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.xfs -f /dev/sdb")]),s._v("\nmeta-data"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdb               "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agcount")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agsize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57600000")]),s._v(" blks\n         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sectsz")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("attr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("projid32bit")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("crc")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("finobt")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sparse")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndata     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("230400000")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("imaxpct")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sunit")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("swidth")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blks\nnaming   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   ascii-ci"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftype")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlog      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("internal log           "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("112500")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sectsz")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sunit")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blks, lazy-count"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nrealtime "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none                   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extsz")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rtextents")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/sdb /mnt/scratch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /proc/mounts |grep /dev/sdb")]),s._v("\n/dev/sdb /mnt/scratch xfs rw,seclabel,relatime,attr2,inode64,noquota "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /dev/sdb")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("也可以先对其分区，如分出/dev/sdb1和/dev/sdb2，然后在sdb1和sdb2上分别做文件系统并挂载:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l /dev/sdb")]),s._v("\n   Device Boot      Start         End      Blocks   Id  System\n/dev/sdb1            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20973567")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10485760")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n/dev/sdb2        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20973568")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("41945087")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10485760")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.xfs -f /dev/sdb1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.ext4 -F /dev/sdb2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/sdb1 /mnt/test && mount /dev/sdb2 /mnt/scratch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /proc/mounts |grep /dev/sdb")]),s._v("\n/dev/sdb1 /mnt/test xfs rw,seclabel,relatime,attr2,inode64,noquota "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n/dev/sdb2 /mnt/scratch ext4 rw,seclabel,relatime,data"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ordered "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /dev/sdb1 && umount /dev/sdb2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("你甚至还可以将sdb1和sdb2先做成LVM，然后在这个dm设备上做文件系统并挂载：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pvcreate /dev/sdb1 /dev/sdb2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vgcreate testvg /dev/sdb1 /dev/sdb2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvcreate -L 10G -n testdev testvg")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.xfs -f /dev/testvg/testdev")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/testvg/testdev /mnt/test")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /proc/mounts |grep testdev")]),s._v("\n/dev/mapper/testvg-testdev /mnt/test xfs rw,seclabel,relatime,attr2,inode64,noquota "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("更甚者，如果你愿意你可以给这个由两个分区做出来的一个LVM设备再分区，再在LVM的分区上再做文件系统并挂载（不展示那么多了，只展示分区部分）：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk /dev/testvg/testdev ")]),s._v("\n\nCommand "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": n\nPartition type:\n   p   primary "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" primary, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" extended, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   e   extended\nSelect "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": p\nPartition number "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-4, default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nFirst sector "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("-20971519, default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nUsing default value "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\nLast sector, +sectors or +size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("K,M,G"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("-20971519, default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20971519")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": +5G\nPartition "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" of "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" Linux and of size "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" GiB is "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("\n\nCommand "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": p\n\nDisk /dev/testvg/testdev: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.7")]),s._v(" GB, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10737418240")]),s._v(" bytes, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20971520")]),s._v(" sectors\nUnits "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sectors of "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisk label type: dos\nDisk identifier: 0x5d025e0f\n\n              Device Boot      Start         End      Blocks   Id  System\n/dev/testvg/testdev1            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10487807")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5242880")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("当然你还可以有更“变态”的操作，而这一切说明的就是文件系统和其底层的存储设备是什么样子的，理论上是没有关系的（当然如果存储有问题那文件系统可能也不能工作）。")]),s._v(" "),e("h2",{attrs:{id:"如何使用文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用文件系统"}},[s._v("#")]),s._v(" 如何使用文件系统")]),s._v(" "),e("p",[s._v("使用一个文件系统最重要的两个步骤一个是创建一个是挂载，创建文件系统（windows下好像俗称格式化），意思就是将文件系统的基本组织格式写道存储设备上。这些基本组织格式包括数据块大小，超级块信息，Free space组织结构等等，这里不做展开讨论，以后说到具体某个文件系统的on-disk结构时再说。总之创建文件系统是第一步。")]),s._v(" "),e("p",[s._v("有了一个文件系统后我们并不能直接访问它，你可以访问文件系统所在的磁盘，比如你对磁盘进行读写操作都没问题。但是文件系统不能在未挂载的情况下使用，我后面可能也会用几个篇幅讲挂载，这里就先简单说一下。同样，这里我也没有查挂载是否有教科书定义，从我的理解来说，挂载就是将存储设备上的文件和目录和已有目录树关联，让你可以通过文件系统的逻辑来访问存储设备。有人可能会问windows下他从没见过挂载一个设备这种事，我不想对windows的逻辑做过多解释，只能说实际上windows也是挂载的，只是它把根目录隐藏了起来，把挂载点以盘符的形式展示给你。这也是用贯windows的人转用Linux后很难理解的其中一个问题“盘符在哪里”。")]),s._v(" "),e("h2",{attrs:{id:"现有文件系统有哪些-随便说两句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现有文件系统有哪些-随便说两句"}},[s._v("#")]),s._v(" 现有文件系统有哪些（随便说两句）")]),s._v(" "),e("p",[s._v("这个真是一个很难说清楚的数字，从历史的长河来看，出现过的文件系统非常多。现在大家比较熟知的是NTFS, Ext2/3/4，ZFS，XFS，Btrfs，NFS等。这些是目前比较主流的文件系统，其中NFS不是本地文件系统，它是通过网络虚拟出文件系统的概念来访问Server端数据，其数据端往往架设在一个现有的本地文件系统之上（如ext4），然后export出一个挂载点，供Client端挂载使用。类似这样概念的文件系统还有很多。")]),s._v(" "),e("h3",{attrs:{id:"ntfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ntfs"}},[s._v("#")]),s._v(" NTFS:")]),s._v(" "),e("p",[s._v("Windows当前的默认文件系统，由于版权和组织格式（对inode不友好）等原因没有被Linux内核直接支持，但可以通过ntfs-3g用户态软件包配合Linux的FUSE机制来使用windows的NTFS文件系统。当你在Linux上插一块带有NTFS文件系统的U盘或硬盘时，挂载的时候Linux就会这样做。")]),s._v(" "),e("h3",{attrs:{id:"extn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extn"}},[s._v("#")]),s._v(" ExtN:")]),s._v(" "),e("p",[s._v("Ext系列是Linux的老牌文件系统了，一直是Linux的主打，从Ext3开始支持日志，Ext4更加完善了很多功能。目前看好像没有Ext5这种打算，没看见Ted提过。由于其组织形式的限制，很难将很多现代文件系统的功能加进去，所以Linux才会出Btrfs项目企图重头开发一个功能强劲的文件系统。")]),s._v(" "),e("h3",{attrs:{id:"btrfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#btrfs"}},[s._v("#")]),s._v(" Btrfs:")]),s._v(" "),e("p",[s._v("Btrfs的目标很远大，从创立之初就被冠以Linux下一代主打文件系统的称号。但是由于各种原因其一直不能足够稳定（这里说的是面对企业级应用级别，普通用户足够用）。RedHat一直没有将其纳入自己的系统主流，可见其确实bug不断。虽然SUSE选择的是Btrfs，但是也是在一定范围内支持，很多功能是不提供稳定保证的。希望Btrfs能越来越好。")]),s._v(" "),e("h3",{attrs:{id:"zfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zfs"}},[s._v("#")]),s._v(" ZFS:")]),s._v(" "),e("p",[s._v("这个可厉害了，它可以说是“目前最好”的文件系统（个人认为，抬杠就免了），功能强大且稳定。Btrfs也是很大程度上想超越至少看齐ZFS的。可惜ZFS只在Solaris上提供最新最全的功能，BSD上还是略逊，Linux上则没有这个直接支持。虽然有ZFSonLinux这个项目，但是那是另一个概念，不讨论了。")]),s._v(" "),e("h3",{attrs:{id:"xfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xfs"}},[s._v("#")]),s._v(" XFS:")]),s._v(" "),e("p",[s._v("RedHat当前的主流文件系统，以支持大存储大数据量为目标，目前上游开发活跃发展迅速，也是我主要为之服务的文件系统。后面我会有更多文章涉及XFS具体细节，这里就不多说了。")]),s._v(" "),e("h3",{attrs:{id:"vfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vfs"}},[s._v("#")]),s._v(" *VFS:")]),s._v(" "),e("p",[s._v("这里我列一下VFS是为了强调一下，这个不是文件系统，这是一个文件系统上层的抽象，不是具体的某个文件系统。你跟人说文件系统包括VFS，就好像你说你编程语言学的VC++一样。")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("嗯……乱七八糟的也说了这么多了，果然概述这种东西还是很容易收不住也很容易说乱了。这第一篇文章就在这收尾吧。没什么实质性的内容，知道的人就别浪费时间看我这瞎掰了，不知道而感兴趣的就好得看看就行。尽信书不如无书，我这里说的已经不知道是第几手的知识传递了，如遇与你所知不符还是以一手材料为准。")])])}),[],!1,null,null,null);t.default=n.exports}}]);