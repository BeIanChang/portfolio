/**
 * Signal-path drawing: PSTN caller → media layer → agent core (guarded) → tools.
 * Fine-line instrument diagram; animates only when motion is allowed.
 */
export function HeroVisual() {
  const line = 'var(--line-strong)';
  const mint = 'var(--mint)';
  const mute = 'var(--mute)';

  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="Diagram of a voice-AI call path: phone call, audio stream, guarded agent core, tool calls"
      className="h-auto w-full max-w-[520px]"
    >
      {/* frame */}
      <rect x="0.5" y="0.5" width="519" height="299" fill="none" stroke={line} />
      <line x1="0" y1="26" x2="520" y2="26" stroke={line} />
      <text x="12" y="17" fill={mute} fontSize="10" fontFamily="var(--font-jetbrains)" letterSpacing="1.5">
        CALL PATH — LIVE
      </text>
      <circle cx="502" cy="13" r="3" fill={mint} className="signal-pulse" />

      {/* caller node */}
      <rect x="28" y="120" width="76" height="44" fill="none" stroke={line} />
      <text x="66" y="139" textAnchor="middle" fill="var(--ink)" fontSize="11" fontFamily="var(--font-jetbrains)">
        PSTN
      </text>
      <text x="66" y="153" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        caller
      </text>

      {/* waveform between caller and core */}
      <path
        d="M116 142 h10 l6 -14 l8 26 l8 -34 l8 40 l8 -30 l6 12 h10"
        fill="none"
        stroke={mint}
        strokeWidth="1.4"
        className="signal-pulse"
      />

      {/* media layer */}
      <rect x="196" y="108" width="92" height="68" fill="none" stroke={line} />
      <text x="242" y="130" textAnchor="middle" fill="var(--ink)" fontSize="11" fontFamily="var(--font-jetbrains)">
        media
      </text>
      <text x="242" y="145" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        freeswitch
      </text>
      <text x="242" y="158" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        patched · C
      </text>

      {/* agent core */}
      <rect x="330" y="86" width="118" height="112" fill="none" stroke={line} />
      <rect x="342" y="100" width="94" height="24" fill="var(--mint-dim)" stroke={mint} strokeWidth="0.8" />
      <text x="389" y="116" textAnchor="middle" fill={mint} fontSize="10" fontFamily="var(--font-jetbrains)">
        agent core
      </text>
      <text x="389" y="146" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        asr · llm · tts
      </text>
      <line x1="342" y1="158" x2="436" y2="158" stroke={line} />
      <text x="389" y="174" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        guards: claims ·
      </text>
      <text x="389" y="186" textAnchor="middle" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)">
        fabrication · leads
      </text>

      {/* flows */}
      <line x1="104" y1="142" x2="196" y2="142" stroke={line} className="signal-dash" />
      <line x1="288" y1="142" x2="330" y2="142" stroke={mint} strokeWidth="1.2" className="signal-dash" />

      {/* tools fan-out */}
      <line x1="448" y1="110" x2="492" y2="78" stroke={line} className="signal-dash" />
      <line x1="448" y1="142" x2="492" y2="142" stroke={line} className="signal-dash" />
      <line x1="448" y1="174" x2="492" y2="206" stroke={line} className="signal-dash" />
      <text x="498" y="76" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)" textAnchor="end" transform="rotate(0)">
        cal
      </text>
      <text x="498" y="140" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)" textAnchor="end">
        crm
      </text>
      <text x="498" y="222" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)" textAnchor="end">
        sms
      </text>

      {/* baseline metrics */}
      <line x1="0" y1="262" x2="520" y2="262" stroke={line} />
      <text x="12" y="282" fill={mute} fontSize="9" fontFamily="var(--font-jetbrains)" letterSpacing="1">
        barge-in ok · smoke 224/224 · failover blue→green
      </text>
      <text x="508" y="282" textAnchor="end" fill={mint} fontSize="9" fontFamily="var(--font-jetbrains)">
        uptime: prod
      </text>
    </svg>
  );
}
