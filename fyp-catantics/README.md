# Catantics (FYP) — Unity Physics-Based Game

**Catantics** (Cat + Antics) is a 3D physics-based game prototype about the daily life of taking care
of a cat. It combines **wacky physics**, **short objective-based levels**, and **light educational
content** (cat care tips/facts) to create an experience that is fun but also meaningful.

This was my Final Year Project, and my first full game development project (I did not take the Game
Development module), so a big part of this work involved **self-directed learning** and iterating
quickly in Unity.

## Demo / Report
- Video demo: https://drive.google.com/file/d/1hET_ml8yYH9msk1ZXBgurSyBJGFk-hes/view?usp=sharing
- Report: https://drive.google.com/file/d/1DlH1tatdXqs3RgGN62FT_egrBgOHwsJV/view?usp=sharing

## Tech Stack
- Unity **2022.3.13f1** (C#)
- Unity Physics (Rigidbodies/Colliders)
- NavMesh + simple AI logic (cat movement)
- Custom shaders (vertex/fragment + visual effects)
- UI (Canvas) and audio integration

## Project Goals
Build a playable prototype featuring:
- 3D graphics + animation
- physics-based gameplay (“wacky physics”)
- short levels with clear objectives and timers
- educational content about cat ownership and welfare (tips/facts + charities section)

## Gameplay Overview
The game is structured as short levels tied together with a light story. Each level introduces or
builds on a mechanic:

- **Level 1 — Moving In (Garden):** learn movement + catch the cat (both hands) before time runs out.
- **Level 2 — Dinner Date (Kitchen/Living Room):** equip a broom and clean up messes before the timer.
- **Level 3 — Bath Time (Bathroom):** multi-step task (soap the cat, then rinse it) with tool equip.
- **Level 4 — Good Night (Bedroom):** catch/carry cat and place it in bed **in a dark environment**.
- **Level 5 — Finale (Basement):** combine earlier mechanics: carry cat to carrier + fix breaker in
  the dark.

### Educational Collectables
Each level contains collectables that:
- show cat care tips/facts via a popup
- grant a small bonus time (+5 seconds)
- use visual variations (particle trails / shader variants) to remain noticeable and fun to find

## What I Implemented / Key Technical Work
- Player movement + third-person camera follow + mouse look
- Physics-driven interactions (push forces, rigidbody collisions)
- Timer + win/lose states + restart flow
- Tool equip/usage logic (broom, soap, shower head, screwdriver)
- Collectable + popup system + bonus time
- Cat AI movement using **NavMesh** and a simple finite-state approach
- UI menus (level select, settings, story scenes, charities/info)
- Audio integration (UI clicks, level win/fail, tool sounds, background music)

## Known Limitation (Transparency)
The **Customise** menu (cat breed selection) is currently **UI-only**.

You can browse/select cat breeds in the menu, but the selected breed **does not yet load into the
gameplay scenes** when the game starts.

## How to Run (Unity)
1. Open the project in Unity: **2022.3.13f1**
2. Open the scene: `MainMenu.unity`
3. Press Play

## Playtesting Summary (from the project evaluation)
External testers reported:
- Controls felt intuitive (most rated very intuitive)
- Wacky physics was consistently described as fun
- Players enjoyed the humour/story and the collectable tips
- Suggestions for improvement included longer playtime/more levels, harder tasks,
  leaderboard/high score, and controller support

## Future Improvements
- Implement breed selection so the chosen cat model loads into gameplay
- Add more levels / increase challenge and replayability (e.g., leaderboard)
- Add controller support
- Polish movement/animations and expand cat behaviour/AI
