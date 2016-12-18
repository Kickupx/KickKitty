# KickKitty
WoW Auto kicker

This tool is based on auto [URL="http://www.ownedcore.com/forums/members/187464-jozsab1.html"]jozsab1[/URL]'s Spell Kicker and is merely a port with some bugfixes to it using [URL="http://botkitty.com"]BotKitty[/URL]. The original version is [URL="http://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-bots-programs/509163-spell-kicker-interrupt-cast-autoit-no-memory-read-any-wow-version.html"]here[/URL]. All credit goes to him. It is tested on Legion and 3.3.5. The reason this bot is written is to explore the real world applicability of [URL="http://botkitty.com"]BotKitty[/URL] which provides an scripting environment for general bot programming (Disclaimer, I am the author of it).

### This is what is supported now: (Copied from jozsab1's version)
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

However there is two bugs which the original version does have which is fixed here. And that is that you can run BotKitty and WoW in different "bitness" versions and it will just work and bot can run in both fully qualified fullscreen mode. I would love to pull them to the original version but this version does not use AutoIt which is where the problem lies.

### Setup:
- Create an empty directory in the wow addon directory, maybe named KickKitty.
- Copy the contents of the addon directory to the directory your created above
- Download and install [URL="http://botkitty.com"]BotKitty[/URL].
- Start BotKitty and in the BotManager add the KickKitty bot.
- Start WoW and enter world.
- There will be a green frame in the middle of screen now. Move it by ctrl+drag the frame to any appropriate location.
- In BotKitty select KickKitty and hit start.
- Congratz, bot is now running.

### Improve the bot:
- Report bugs with KickKitty on github
- Report bugs with BotKitty [](http://issuetracker.botkitty.com here).
- If you hate it, let me know^^
- If you like it, say thanks^^