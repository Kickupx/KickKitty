This tool is based an automatic spell kicker which kicks at beginning of channelled spells and in the end of other spells. This software is based on [URL="http://www.ownedcore.com/forums/members/187464-jozsab1.html"]jozsab1[/URL]'s Spell Kicker and is merely a port with some bugfixes to it using [URL="http://botkitty.com"]BotKitty[/URL]. The original version is [URL="http://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-bots-programs/509163-spell-kicker-interrupt-cast-autoit-no-memory-read-any-wow-version.html"]here[/URL]. All credit goes to him. I have tested it on Legion and 3.3.5. The reason this bot is written is to explore the real world applicability of [URL="http://botkitty.com"]BotKitty[/URL] which provides an scripting environment for general bot programming (Disclaimer, I am the author of it).

[SIZE=5]This is what is supported now[/SIZE]: (Copied from jozsab1's version)
- hard to detect by blizz
- interrupt main target spell casting
- interrupt focus target spell casting
- interrupt any arena opponent spell casting even if not targeted ( if possible ) ( you have to add keybinds for it )
- lag compensation
- adjustable timers to fine tune moment of interrupt ( end of the cast bar at millisecond precision )
- setting to avoid interrupting instant cast spells
- most class interrupt spells included by default ( let me know if i forgot some )
- optional spell white list( only interrupt these spells ) ( by default list is empty )
- optional spell blacklist( interrupt anything but these ) ( by default list is empty )
- optional to only interrupt if target is bursting ( included some names by default but you need to set NumberOfBurstAuras = 1 )
- do NOT interrupt if target is spell shielded ( enabled by default )
- anti bot fake cast protection ( check if target is specced for that spell + only interrupt at last moment )( default list is empty )
- option to only interrupt spells that are buffed by specific auras ( bad ex : only interrupt Exorcism if target has Holy Avenger )
- GUI for quick keybind setup
- option to resend spell cast on failed cast ( latency / silence.. )
- option to use cyrilic ( UTF-8 ) keys for keybinds ( not practically tested )
- free, open source. You can change it and use your own version. Please post all your changes here, even if it is very small ( it makes me happy )

However there is two bugs which the original version does have which is fixed here. And that is that you can run BotKitty and WoW in different "bitness" versions and it will just work. I would love to pull them to the original version but this version does not use AutoIt which is where the problem lies.

[SIZE=5]Bugs:[/SIZE]
- Currently window fullscreen does not work

[SIZE=5]Setup(Notice this was changed 7 january):[/SIZE]
- Download [URL="http://github.com/Kickupx/KicKKitty"]KickKitty[/URL]
- Extract it in a directory where you want to keep it
- Run KickKitty/addon/GenerateRandomName.exe file.
- In the KickKitty root directory there will be a directory with a random name
- Copy that directory to your WoW addon directory
- Download and install [URL="http://botkitty.com"]BotKitty[/URL].
- Start BotKitty and in the BotManager add the KickKitty bot.
- Start WoW, and make sure that your addon is loaded. It is the same name as the generate random name tool generated.
- Enter world.
- There will be a green frame in the middle of screen now. Move it by ctrl+drag the frame to any appropriate location. But make sure it is not hidden.
- In BotKitty select KickKitty and hit start.
- Congratz, bot is now running.


How it might look:
[ATTACH]47245[/ATTACH]

[SIZE=5]Improve the bot[/SIZE]
- Report bugs with KickKitty on github
- Report bugs with BotKitty [URL="http://issuetracker.botkitty.com"]here[/URL].
- If you hate it, let me know^^
- If you like it, say thanks^^

[SIZE=5]Virustotal:[/SIZE]
[url]https://www.virustotal.com/sv/file/76f34ad5f66071a16ff7d32e89f46fc7d1ad21dea6c75f7fd2adb664a7f352ec/analysis/1482058889/[/url]
If you think this antivirus check is not good enough, let me know.

[SIZE=5]Download:[/SIZE]
- x86 BotKitty: [URL="http://product.botkitty.com/BotKitty_installer_x86.exe"]http://product.botkitty.com/BotKitty_installer_x86.exe[/URL]
- x64 BotKitty: [URL="http://product.botkitty.com/BotKitty_installer_x64.exe"]http://product.botkitty.com/BotKitty_installer_x64.exe[/URL]
- KickKitty: [URL="https://github.com/Kickupx/KickKitty"]Github[/URL]

[SIZE=4]Blog[/SIZE]
If you want to explore how it is written I have written a [URL="http://botkitty.com/blog/2016/12/29/writing-an-wow-auto-kicker/"]blog[/URL] about it.

[SIZE=4]Edit:[/SIZE]
Special thanks to JasDevi and Vekom for reporting bugs! Really appreciate it