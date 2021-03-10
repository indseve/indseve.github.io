(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{719:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("倒腾树莓派的时候遇到了一个需求：插入u盘后自动检测是否有更新程序，并进行更新，系统则用的是ubuntu")]),s._v(" "),t("p",[s._v("由于我们的项目是一个嵌入式项目，只配置了一台工控机，没有屏幕，所以平时这台机器是闲置的。因此要求在开机前插入u盘，开机的时候自动检测并更新，说白了就是用u盘的新程序替换机器里的原程序。")]),s._v(" "),t("p",[s._v("最开始的思路就是在开机启动的rc.local脚本文件里写一条指令，拷贝u盘中的指定文件，但发现开机前u盘是没有挂载的，上述指令无法在开机前实现，这时就需要设置Linux开机自动挂载指定的u盘。")]),s._v(" "),t("p",[s._v("具体方法在网上一搜就有了——改写/etc/fstab文件的内容。")]),s._v(" "),t("p",[s._v("在文件末尾添加下面的一行：")]),s._v(" "),t("p",[s._v("UUID=“xxxx” /mnt/usb ext4 defaults 0 0\n其中第一列是u盘的UUID，第二列是挂载的路径（前提是路径要存在，这里省略了创建文件夹的步骤），第三列是文件系统类型，第四列是挂载选项，如果挂载的是u盘，最后两列设成0就行了。")]),s._v(" "),t("p",[s._v("UUID等信息，需要通过blkid指令来查询，找到你的u盘就行了，我的信息是：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/dev/sdb1: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LABEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ntfs"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("把UUID和TYPE填到对应位置，改成自己要挂载的路径后保存。注意：fstab是只读文件，保存和修改前要解决好权限问题。")]),s._v(" "),t("p",[s._v("保存重启后，就能实现指定u盘的自动挂载了，这样在开机前就会完成挂载，拷贝u盘里的文件。不过很快我们又发现了新的问题：必须插上u盘才能开机，没有u盘就会启动失败。这个时候必须进入救援模式，重新设置fstab文件的内容，才能正常开机。")]),s._v(" "),t("p",[s._v("这又该怎么办呢，难道我的U盘要永远跟机器合体了？")]),s._v(" "),t("p",[s._v("其实defaults选项有“未插入时忽略”，只是现在网上能搜到的那些配置教程里都没提到。")]),s._v(" "),t("p",[s._v("现在重新设置fstab文件，把输入的信息改成：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("“xxxx” /mnt/usb ext4 defaults,nofail "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这回就可以啦。")]),s._v(" "),t("p",[s._v("P.S. 一定要将fstab的内容设置正确，否则机器会无法启动！")])])}),[],!1,null,null,null);a.default=n.exports}}]);