# Talking Portrait — AI Lip-Sync Greeting

## Idea

Profile photo on the Home hero speaks a short scripted greeting, lip-synced via AI
(HeyGen / D-ID / Hedra — feed it ~30s of real voice recording for best sync).

## Script (~10s, approved)

> "Hey — I'm Derek. I went from soldering embedded systems to shipping
> production SaaS. This talking portrait? Also AI — that's kind of my thing.
> Scroll down and see what I've built."

Rationale: the self-reference doubles as a demo — AI-directed engineering is the
brand, so the talking photo is proof of the thing being sold.

## Requirements

- Trigger: click/tap on portrait ("▶ hear me" affordance) — never autoplay.
  Browsers block autoplay-with-audio; a silently mouthing face reads creepy.
- Once per session, not a loop on every hover.
- Keep under ~12s — lip-sync quality and uncanny-valley tolerance both degrade
  with length.
- Trilingual parity: site ships en/pl/es — either generate all three versions
  or add localized captions. Polish/Spanish script needed at implementation time.
- Accessibility: the play affordance must be a real `<button>` with a localized
  aria-label via `translations.js`; clip is opt-in so reduced-motion is
  inherently respected, but honor `prefers-reduced-motion` for any UI shimmer.
- Theme: portrait swaps with `isDark` (`profileImage.webp` /
  `light_theme_profile.webp`) — decide whether the talking clip is
  theme-agnostic or needs two variants.

## Status (implemented)

- Tool: image-to-video playground (voice-identity reference audio + script in
  prompt), not HeyGen/D-ID — lip-sync generated from prompt text.
- Format: plain `<video>` click-to-play — mounts lazily on tap
  (`preload="none"`, src only set after gesture), `autoPlay` + `playsInline`,
  tap or `ended` swaps back to the still. Generated clip's last frame matches
  the portrait for a seamless return.
- Asset: `public/talking-portrait/profile-dark-en.mp4` (~3.8MB, 1:1).
  Naming convention `profile-{theme}-{lang}.mp4` for future variants.
- Shown only for `language === "English"` **and** dark theme — generate
  `profile-light-en.mp4` / pl / es variants to widen coverage.
- `serve-e2e.js` serves `.mp4` as `video/mp4`.

### Status update (audit remediation)

The lazy-mount design above was superseded: the video is permanently mounted
over the still (flicker guard) and now uses `preload="metadata"` — the ~1.2 MB
MP4 downloads only on tap. Available in all languages and both themes; while
playing, a `.portrait-playing` class on `<html>` pauses decorative CSS
animations (verified low-end-Android stall fix). Clip re-encoded to 480×480
H.264 (~1.2 MB). No `poster` — the still underneath is the idle visual, so a
poster was a redundant eager fetch.

### Status update (captions)

`<track>` captions shipped: `profile-dark-en.vtt` loads in `hidden` mode —
browser-rendered captions would be clipped by the circular crop, so cue text
surfaces in a styled speech bubble (`aria-live="polite"`, `aria-atomic`) below
the portrait instead. The final cue ("Scroll down and see what I've built.")
lingers ~3.5 s after `ended` as a scroll nudge, then fades over 500 ms with a
slight downward drift; replay/unmount clears the timers and
`prefers-reduced-motion` drops the transition.

## Open questions

- pl/es clips or localized captions — currently English-only affordance.
- WCAG caption text is English-only (`profile-dark-en.vtt`); generate localized
  `.vtt` files alongside any future pl/es clips.
