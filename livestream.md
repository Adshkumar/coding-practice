You are a principal software architect, senior C++ systems engineer, senior Rust engineer, senior TypeScript/React engineer, distributed-systems engineer, media-streaming engineer, DevOps engineer, security engineer, QA engineer, and startup CTO.

I want you to build a production-grade desktop live-streaming platform from the ground up.

The product should be significantly more advanced than a basic OBS clone.

The product vision is:

"An AI-powered operating system for livestream creators."

It should combine:

1. Professional live streaming studio
2. Screen/camera capture
3. Professional audio mixer
4. Scene/layout management
5. Multi-platform streaming
6. Unified chat
7. AI streaming copilot
8. AI moderation
9. Automatic highlight detection
10. Automatic clips/shorts generation
11. Stream analytics
12. Audience analytics
13. Stream memory
14. Creator CRM
15. Sponsorship tools
16. Offline streaming mode
17. Local/LAN streaming
18. Simulated/pre-recorded live
19. Automatic reconnection
20. Crash recovery
21. Background processing
22. Cloud synchronization
23. Recording
24. Stream health monitoring
25. Advanced observability
26. Secure account management
27. Scalable backend architecture
28. Subscription/billing architecture
29. Plugin/extension architecture
30. Cross-platform desktop support

IMPORTANT:

Do NOT create fake functionality.

Do NOT create buttons that only display alerts.

Do NOT use mock data for production functionality unless explicitly marked as development-only.

Every feature must have a real implementation, proper error handling, loading states, failure states, retry mechanisms, persistence, logging, and tests.

If a feature requires external credentials/API keys, implement the complete integration architecture and clearly document the required environment variables and setup.

Do not compromise architecture just to make the first version easier.

Build the foundation so the application can scale from hundreds to millions of users.

==================================================
1. CORE PRODUCT
==================================================

The application is a desktop application.

Primary desktop platforms:

- Windows
- macOS
- Linux

The architecture must allow platform-specific native implementations behind common interfaces.

The UI should resemble a professional streaming studio.

Main navigation:

- Dashboard
- Studio
- Destinations
- Audio
- Scenes
- Chat
- Content
- Analytics
- AI Assistant
- Audience
- Sponsors
- Stream History
- Settings

The current Studio UI concept contains:

- Live preview
- Scene/layout selector
- Audio controls
- Streaming controls
- Recording controls
- Chat
- Streaming status
- Destination status

Preserve a clean professional dark UI.

The UI must be responsive and should not freeze while streaming, recording, encoding, uploading, or AI processing.

==================================================
2. CRITICAL ARCHITECTURE PRINCIPLE
==================================================

Separate the application into:

A. Presentation Layer
B. Application/Control Layer
C. Native Media Engine
D. AI Layer
E. Local Persistence
F. Cloud/API Layer
G. Background Worker System
H. Observability Layer

Never tightly couple React UI to the native media engine.

Use clear interfaces and IPC/RPC boundaries.

Recommended architecture:

Desktop UI:
React + TypeScript

Desktop shell:
Tauri preferred where practical.

Native high-performance layer:
C++ for media/encoding/capture integrations where required.

Rust:
Use Rust for memory-safe native orchestration, system integration, IPC, process supervision, and security-sensitive native functionality where practical.

C++:
Use C++ for performance-critical media processing and integrations with FFmpeg/native capture/encoding APIs.

Backend:
TypeScript/Node.js for API/control-plane services.

Optional Go:
Use Go for high-throughput independent backend services where it provides a clear architectural advantage.

Database:
MongoDB

Cache:
Redis


Queue:
Redis Streams/BullMQ or another durable job queue.

Media processing:
FFmpeg

Observability:
OpenTelemetry
Prometheus
Grafana

Containerization:
Docker

Production orchestration:
Kubernetes-compatible architecture.

==================================================
3. NATIVE MEDIA ENGINE
==================================================

Build a dedicated native media engine.

The UI must NEVER directly perform expensive video/audio processing.

The media engine should handle:

- Camera capture
- Microphone capture
- Screen capture
- Window capture
- Audio capture
- Audio mixing
- Video composition
- Scene rendering
- Video scaling
- Frame rate management
- Audio sample rate conversion
- Encoding
- Recording
- Streaming
- Buffering
- Reconnection
- Hardware acceleration
- Device discovery
- Device switching
- Device failure recovery

Create a clean abstraction:

IMediaEngine

with implementations behind it.

Example capabilities:

start()
stop()
pause()
resume()
restart()

addVideoSource()
removeVideoSource()

addAudioSource()
removeAudioSource()

createScene()
destroyScene()

switchScene()

startRecording()
stopRecording()

startStreaming()
stopStreaming()

getStreamStats()

getAudioStats()

getVideoStats()

getDevices()

setVideoSettings()

setAudioSettings()

==================================================
4. VIDEO ENGINE
==================================================

Support:

- 30 FPS
- 60 FPS
- configurable FPS
- 720p
- 1080p
- 1440p
- 4K where hardware allows

Support:

- H.264
- H.265/HEVC where supported
- AV1 where hardware/software support exists

Hardware acceleration should be used when available.

Support platform-specific encoders:

Windows:
- NVENC
- AMD AMF
- Intel QSV
- Media Foundation where appropriate

macOS:
- VideoToolbox

Linux:
- VAAPI
- NVENC
- other supported hardware APIs

Never assume hardware acceleration exists.

Always have a software fallback.

Detect encoder capabilities automatically.

==================================================
5. AUDIO ENGINE
==================================================

Implement a professional audio mixer.

Support:

- microphone
- desktop/system audio
- application audio
- multiple microphones
- multiple audio sources
- monitoring
- mute
- solo
- gain
- volume
- pan
- compressor
- limiter
- equalizer
- noise suppression
- echo cancellation where available
- automatic gain control
- audio meters

Audio must not clip.

Implement:

- peak detection
- RMS level
- clipping detection
- silence detection

If microphone becomes unavailable:

Detect it.

Display a clear warning.

Attempt recovery.

Do not crash the application.

==================================================
6. SCENE SYSTEM
==================================================

Implement a real scene system.

A scene contains:

- camera
- screen
- window
- image
- video
- text
- browser/web content
- audio sources
- overlays
- alerts
- widgets

Allow:

- drag
- resize
- rotate
- crop
- transform
- visibility
- locking
- z-index
- grouping

Support scene transitions:

- cut
- fade
- slide
- custom transition architecture

Scenes must be persistable.

Autosave scene configuration.

Support undo/redo.

==================================================
7. STREAMING PROTOCOLS
==================================================

Design the streaming engine around protocol adapters.

Implement interfaces:

IStreamingProvider

Support:

- RTMP
- RTMPS
- SRT where practical
- WebRTC where appropriate

The architecture must allow future protocols.

Streaming provider interface should handle:

connect()
authenticate()
start()
stop()
reconnect()
getStats()

Never block the UI thread.

==================================================
8. MULTI-PLATFORM STREAMING
==================================================

Support destinations such as:

- YouTube
- Twitch
- X
- Facebook
- custom RTMP
- future providers

Each destination should be an adapter.

Example:

IStreamingDestination

YouTubeDestination
TwitchDestination
XDestination
CustomRTMPDestination

Allow multiple destinations simultaneously.

Example:

YouTube ✓
Twitch ✓
X ✓

If one destination fails:

DO NOT terminate the entire stream.

Example:

YouTube: LIVE
Twitch: LIVE
X: ERROR

Attempt reconnect for only X.

==================================================
9. NETWORK RESILIENCE
==================================================

This is CRITICAL.

Implement:

- connection monitoring
- packet loss detection
- latency detection
- bandwidth monitoring
- jitter monitoring
- bitrate adaptation
- reconnect logic
- exponential backoff
- circuit breaker
- upload resumption
- stream state recovery

Never continuously retry aggressively.

Use:

exponential backoff + jitter.

Example:

1 sec
2 sec
4 sec
8 sec
16 sec
30 sec maximum

Provide configurable limits.

==================================================
10. OFFLINE STREAMING MODE
==================================================

Implement a true Offline Session Mode.

Important:

Offline mode must NOT pretend that YouTube/Twitch received a stream without internet.

Instead:

When internet is unavailable:

- capture video
- capture audio
- record scenes
- store metadata
- store timestamps
- store markers
- store stream events
- store AI metadata when locally available

Everything must be stored locally.

When internet becomes available:

detect connection.

Display:

"Connection restored."

Allow:

- upload recording
- resume processing
- synchronize metadata
- generate clips
- upload to cloud

Support resumable/chunked uploads.

If upload fails:

resume from the last successful chunk.

Do not restart the entire upload.

==================================================
11. LOCAL/LAN STREAMING
==================================================

Implement Local Stream mode.

Allow users on the same LAN to watch the stream.

Architecture:

Streamer PC
     |
Local network
     |
Viewer devices

Generate:

- local stream URL
- QR code
- optional local authentication

Support:

- configurable LAN port
- access control
- viewer limits
- bandwidth control

The local stream must work without internet.

==================================================
12. SIMULATED LIVE
==================================================

Implement pre-recorded/simulated live architecture.

User can:

1. Record content
2. Upload/select video
3. Schedule a stream
4. Broadcast it as a scheduled event where the destination supports it

Maintain clear UI distinction:

REAL LIVE
PRE-RECORDED
LOCAL LIVE
OFFLINE SESSION

Never misrepresent a pre-recorded stream internally as a real-time recording.

==================================================
13. RECORDING SYSTEM
==================================================

Support local recording.

Formats:

- MP4
- MKV where useful for crash recovery
- configurable output format

Implement safe recording.

Prefer crash-resilient recording strategy.

If the application crashes during recording:

Attempt automatic recovery of the recording.

Use atomic file handling.

Never overwrite existing recordings accidentally.

Maintain metadata:

- start time
- duration
- resolution
- FPS
- audio configuration
- encoder
- file size
- scene information

==================================================
14. CRASH RECOVERY
==================================================

This is one of the highest-priority requirements.

The application must be designed to survive:

- camera failure
- microphone failure
- GPU failure
- encoder failure
- network failure
- API failure
- AI failure
- disk full
- insufficient memory
- invalid configuration
- corrupted media
- process crash
- unexpected application termination

Use process supervision.

Architecture:

Desktop App
    |
Supervisor
    |
Media Engine

If Media Engine crashes:

1. UI remains alive.
2. Supervisor detects crash.
3. Collect crash information.
4. Restart media engine.
5. Restore previous state where possible.
6. Notify user.
7. Continue recording/streaming if technically possible.

Never let native engine failure crash the entire UI.

==================================================
15. DISK SPACE MANAGEMENT
==================================================

Monitor disk space continuously.

Before recording:

check available storage.

During recording:

monitor storage.

If storage becomes critically low:

show warning.

At emergency threshold:

safely stop recording.

Never allow uncontrolled disk exhaustion.

Implement:

- storage quotas
- recording cleanup
- configurable recording directory
- free-space indicator

==================================================
16. AI STREAMING COPILOT
==================================================

Create an AI assistant specifically for livestream creators.

It should understand:

- current stream
- transcript
- chat
- scene
- audience activity
- stream history
- creator preferences

Capabilities:

- answer creator questions
- summarize chat
- identify important questions
- suggest responses
- detect interesting moments
- suggest scene changes
- identify viewer drops
- suggest stream improvements
- generate titles
- generate descriptions
- generate tags
- generate social posts

The AI must not automatically send responses to viewers without explicit creator permission unless the user has explicitly enabled an automation rule.

==================================================
17. AI CHAT MODERATION
==================================================

Classify chat messages:

- question
- important
- normal
- spam
- scam
- harassment
- toxic
- self-promotion
- suspicious link
- potential customer
- potential collaborator
- high-value viewer

Create moderation actions:

- hide
- timeout
- block
- report
- whitelist
- blacklist

Support configurable moderation policies.

Never permanently ban users automatically based solely on uncertain AI classification.

Use confidence thresholds.

==================================================
18. AI HIGHLIGHT DETECTION
==================================================

During the stream collect signals:

- transcript
- chat velocity
- viewer count
- viewer retention
- reactions
- audio intensity
- scene changes
- keywords
- creator markers

Generate candidate highlights.

Example:

Highlight score:

0-100

But do not claim the score guarantees virality.

Show:

"Potential highlight"

rather than:

"Guaranteed viral clip."

Store timestamps.

==================================================
19. AUTOMATIC CLIP GENERATION
==================================================

After stream:

Analyze candidate moments.

Generate clips.

Each clip can contain:

- original video
- cropped video
- 9:16 format
- captions
- speaker tracking
- title
- hook
- thumbnail

Support:

- YouTube Shorts
- Instagram Reels
- TikTok
- X video

Provide manual editing controls.

Never force automatic publishing.

==================================================
20. STREAM CHAPTERS
==================================================

Automatically generate chapters.

Example:

00:00 Introduction
04:12 Project setup
18:30 Database design
45:20 Authentication
01:22:10 Debugging
02:01:33 Q&A

Allow editing chapters manually.

==================================================
21. STREAM ANALYTICS
==================================================

Track:

- viewers
- peak viewers
- average viewers
- watch time
- chat messages
- engagement
- follows/subscribers where APIs allow
- stream duration
- bitrate
- FPS
- dropped frames
- CPU
- GPU
- RAM
- network latency
- packet loss

Show real-time charts.

==================================================
22. AI STREAM REVIEW
==================================================

After every stream generate:

STREAM REVIEW

Include:

- summary
- strongest segments
- potential weak segments
- viewer drop points
- high-chat moments
- technical problems
- audio problems
- video problems
- recommended improvements

All conclusions must be presented as analysis/signals, not guaranteed outcomes.

==================================================
23. STREAM MEMORY
==================================================

Create persistent stream memory.

Remember:

- previous stream topics
- important discussions
- recurring questions
- frequently mentioned projects
- creator preferences
- previous clips
- previous performance

Use vector embeddings where useful.

Architecture:

MongoDB
+
pgvector or vector database

Do not store sensitive information unnecessarily.

Allow users to delete stored memory.

==================================================
24. CREATOR KNOWLEDGE BASE
==================================================

Allow creator to connect/upload:

- website
- documentation
- GitHub repositories
- FAQs
- product documentation
- personal notes
- public portfolio

The AI can use this information to answer creator questions and suggest responses.

Use RAG.

Pipeline:

Document
  |
Parser
  |
Chunking
  |
Embedding
  |
Vector DB
  |
Retriever
  |
LLM

Include source attribution inside the creator-facing UI when appropriate.

==================================================
25. AUDIENCE ANALYTICS
==================================================

Create an audience dashboard.

Show aggregated information such as:

- returning viewers
- new viewers
- engagement
- chat activity
- frequent topics
- active times
- audience interests where the platform provides permitted data

Do not expose private or sensitive personal information.

==================================================
26. CREATOR CRM
==================================================

Allow creators to organize legitimate business/community relationships.

Categories:

- collaborator
- sponsor
- customer
- community member
- frequent viewer

Provide notes and interaction history where legally and technically permitted.

Avoid collecting unnecessary personal data.

==================================================
27. SPONSORSHIP SYSTEM
==================================================

Create a sponsorship module.

Features:

- creator profile
- audience summary
- media kit
- sponsorship opportunities
- campaign tracking
- sponsor contacts
- campaign status
- deliverables
- revenue tracking

Future architecture can support a sponsor marketplace.

==================================================
28. CONTENT ENGINE
==================================================

After stream:

Generate:

- stream summary
- YouTube description
- chapters
- X posts
- LinkedIn posts
- Instagram captions
- short-form video hooks
- clip titles
- thumbnails

Everything must be editable before publishing.

==================================================
29. AUTHENTICATION
==================================================

Implement secure authentication.

Support architecture for:

- email
- OAuth
- Google
- GitHub
- future providers

Use secure token handling.

Never store plaintext passwords.

Use:

- secure sessions
- refresh tokens
- token rotation
- CSRF protection where relevant
- rate limiting

==================================================
30. SECURITY
==================================================

Apply production security.

Requirements:

- TLS everywhere
- encrypted secrets
- secure credential storage
- OS keychain/credential manager
- API rate limiting
- input validation
- output sanitization
- SQL injection prevention
- command injection prevention
- path traversal prevention
- SSRF protection
- secure file upload validation
- malware scanning architecture
- least privilege
- audit logging

Never expose:

- API secrets
- stream keys
- OAuth secrets
- database passwords

in frontend bundles.

==================================================
31. SECRET MANAGEMENT
==================================================

Development:

.env

Production:

secret manager.

Never commit:

.env
private keys
service accounts
stream keys
OAuth secrets

Create:

.env.example

with safe placeholder values.

==================================================
32. DATABASE
==================================================

Use MongoDB.

Design normalized schemas.

Entities may include:

users
organizations
creator_profiles
streams
stream_sessions
stream_destinations
stream_events
scenes
scene_sources
recordings
clips
chat_messages
chat_events
analytics
audience_events
ai_jobs
ai_results
memories
documents
document_chunks
sponsors
campaigns
subscriptions
notifications
devices

Use migrations.

Never manually modify production schemas.

==================================================
33. CACHE
==================================================

Use Redis for:

- sessions where appropriate
- rate limits
- temporary state
- real-time events
- queues
- job coordination
- distributed locks

Do not use Redis as the primary permanent database.

==================================================
34. BACKGROUND JOB SYSTEM
==================================================

All heavy work must be asynchronous.

Examples:

- transcription
- AI analysis
- clip generation
- video encoding
- thumbnail generation
- upload
- cloud synchronization
- analytics aggregation

Architecture:

API
 |
Queue
 |
Workers
 |
Storage

Implement:

- retry
- exponential backoff
- dead-letter queue
- idempotency
- job status
- progress tracking
- cancellation

==================================================
35. IDEMPOTENCY
==================================================

Critical operations must be idempotent.

For example:

Uploading a recording twice must not create two duplicate recordings.

Generating a clip twice must not create uncontrolled duplicates.

Payment webhooks must be idempotent.

Streaming events must be safely deduplicated.

==================================================
36. REAL-TIME SYSTEM
==================================================

Use WebSocket where appropriate.

Events:

stream.started
stream.stopped
stream.error
stream.reconnected
viewer.count.updated
chat.message
chat.moderated
clip.ready
ai.analysis.ready
upload.progress
device.connected
device.disconnected

Use typed event schemas.

==================================================
37. OBSERVABILITY
==================================================

Every production component must provide:

- structured logs
- metrics
- tracing
- health checks
- readiness checks
- error reporting

Use OpenTelemetry.

Metrics should include:

CPU
RAM
GPU
FPS
dropped frames
bitrate
network latency
packet loss
encoder latency
queue depth
job failure rate
API latency
database latency

==================================================
38. LOGGING
==================================================

Use structured JSON logs in production.

Every important operation should have:

request_id
trace_id
user_id where appropriate
session_id
stream_id
timestamp
component
severity
error_code

Never log secrets.

Never log access tokens.

Never log stream keys.

==================================================
39. ERROR SYSTEM
==================================================

Create typed error codes.

Example:

MEDIA_CAMERA_UNAVAILABLE
MEDIA_MICROPHONE_UNAVAILABLE
ENCODER_UNAVAILABLE
STREAM_CONNECTION_FAILED
STREAM_AUTH_FAILED
DESTINATION_RATE_LIMITED
DISK_SPACE_LOW
AI_SERVICE_UNAVAILABLE
UPLOAD_INTERRUPTED

UI should display human-readable messages.

Developers should receive detailed diagnostics.

==================================================
40. HEALTH MONITORING
==================================================

Create a system health panel.

Example:

Camera       ✓
Microphone   ✓
Encoder      ✓
GPU          ✓
Disk         ✓
Network      ✓
YouTube      ✓
Twitch       ✓
AI           ✓

Warnings should be actionable.

==================================================
41. AUTO RECOVERY
==================================================

Every subsystem should have recovery strategies.

Camera fails:

restart camera.

Microphone fails:

reinitialize audio device.

Encoder fails:

fallback encoder.

GPU unavailable:

software encoding if possible.

Network fails:

buffer and reconnect.

AI service fails:

continue streaming without AI.

Redis fails:

application should degrade gracefully.

Database temporarily unavailable:

use safe retry mechanisms.

Never allow optional AI functionality to stop the actual stream.

==================================================
42. GRACEFUL DEGRADATION
==================================================

The core streaming system must work even if:

- AI unavailable
- cloud unavailable
- analytics unavailable
- one destination unavailable
- one device unavailable

Separate:

CORE STREAMING

from:

OPTIONAL INTELLIGENCE SERVICES.

==================================================
43. OFFLINE-FIRST LOCAL STATE
==================================================

Important local state should be persisted.

Examples:

- scenes
- settings
- device configuration
- recordings
- stream metadata
- offline sessions
- pending uploads

Use a local database such as SQLite where appropriate.

Use transactions.

Use migration support.

==================================================
44. FILE SYSTEM SAFETY
==================================================

Never trust arbitrary file paths.

Sanitize paths.

Prevent path traversal.

Use safe temporary directories.

Use atomic writes.

Use file locks where required.

Never overwrite user recordings accidentally.

==================================================
45. AUTO UPDATE SYSTEM
==================================================

Create architecture for safe application updates.

Requirements:

- signed releases
- version checks
- rollback strategy
- update verification
- migration compatibility

Never automatically install unverified binaries.

==================================================
46. PLUGIN ARCHITECTURE
==================================================

Design future plugin support.

Possible plugins:

- streaming destinations
- widgets
- overlays
- AI providers
- chat providers
- capture sources

Use sandboxing and permissions.

Never allow arbitrary plugins to access everything by default.

==================================================
47. API DESIGN
==================================================

Use versioned APIs.

Example:

/api/v1/auth
/api/v1/users
/api/v1/streams
/api/v1/destinations
/api/v1/recordings
/api/v1/clips
/api/v1/analytics
/api/v1/ai
/api/v1/audience
/api/v1/sponsors

Use OpenAPI.

Validate requests.

Validate responses.

==================================================
48. API RATE LIMITING
==================================================

Implement rate limits.

Different limits for:

- authentication
- AI
- uploads
- stream creation
- chat
- analytics
- public APIs

Use Redis-backed distributed rate limiting.

==================================================
49. BILLING ARCHITECTURE
==================================================

Create subscription architecture.

Plans:

Free
Creator
Pro
Team
Enterprise

Do not hard-code pricing throughout the codebase.

Use a billing provider abstraction.

Support future providers.

==================================================
50. TESTING
==================================================

This is mandatory.

Write:

Unit tests
Integration tests
End-to-end tests
Load tests
Stress tests
Failure tests
Security tests
Native engine tests

C++:

GoogleTest

TypeScript:

Vitest/Jest

E2E:

Playwright

Test scenarios such as:

- camera disconnects
- microphone disconnects
- internet disconnects
- encoder crashes
- disk becomes full
- API times out
- AI unavailable
- destination authentication expires
- Redis unavailable
- database unavailable
- application crashes
- machine restarts

==================================================
51. CHAOS TESTING
==================================================

Create controlled failure tests.

Simulate:

- network loss
- packet loss
- high latency
- bandwidth reduction
- process crash
- disk pressure
- CPU pressure
- GPU unavailable
- API timeout
- database timeout

Verify recovery.

==================================================
52. PERFORMANCE
==================================================

Do not block the UI thread.

Target:

smooth UI
stable frame processing
low latency
low unnecessary CPU consumption

Use profiling.

Measure before optimizing.

Use:

- CPU profiling
- memory profiling
- GPU profiling
- network profiling

Avoid premature optimization.

==================================================
53. MEMORY SAFETY
==================================================

C++ code must follow modern C++ standards.

Use:

- RAII
- smart pointers
- move semantics
- const correctness
- ownership rules
- bounds checking
- sanitizers
- static analysis

Avoid:

- raw owning pointers
- manual memory management unless unavoidable
- global mutable state

Use:

AddressSanitizer
UndefinedBehaviorSanitizer
ThreadSanitizer where applicable

Rust should be preferred when equivalent functionality can be implemented safely without sacrificing required performance.

==================================================
54. CONCURRENCY
==================================================

Streaming is highly concurrent.

Design explicit ownership.

Avoid race conditions.

Use:

- thread-safe queues
- lock-free structures only where justified
- actor/message-passing patterns where useful
- cancellation tokens
- backpressure

Every background task must support cancellation where practical.

==================================================
55. RESOURCE MANAGEMENT
==================================================

Every resource must have deterministic cleanup.

Examples:

camera
microphone
encoder
file
network socket
WebSocket
thread
GPU resource
temporary file

No leaks.

==================================================
56. CONFIGURATION
==================================================

Centralize configuration.

Support:

development
test
staging
production

Never scatter environment variables throughout the application.

==================================================
57. FEATURE FLAGS
==================================================

Implement feature flags for experimental functionality.

Example:

AI_COPILOT
LAN_STREAM
SIMULATED_LIVE
AUTO_CLIPS
SPONSOR_MODULE

This allows controlled rollout.

==================================================
58. DATABASE TRANSACTIONS
==================================================

Use transactions whenever multiple related records must change atomically.

Never leave partial state.

==================================================
59. BACKUP AND RECOVERY
==================================================

Production backend must have:

- database backups
- backup verification
- retention policy
- disaster recovery plan

Document RPO and RTO targets.

==================================================
60. MULTI-TENANCY
==================================================

Architecture should support:

individual creators
teams
agencies
organizations

Use tenant isolation.

Never allow one organization to access another organization's data.

==================================================
61. PRIVACY
==================================================

Collect minimum necessary data.

Provide:

- account deletion
- data export
- data deletion
- privacy settings
- AI data controls

Do not use private user data for AI training without explicit appropriate consent.

==================================================
62. DESKTOP SECURITY
==================================================

Native IPC must be authenticated/validated.

Do not allow arbitrary frontend input to execute shell commands.

Whitelist allowed native operations.

Validate all IPC messages.

==================================================
63. DEVELOPMENT WORKFLOW
==================================================

Use Git.

Use:

feature branches
pull requests
code review
linting
formatting
type checking
automated tests
CI

Every PR should pass:

- build
- type check
- lint
- unit tests
- integration tests

==================================================
64. CI/CD
==================================================

Create CI pipelines.

Stages:

1. install
2. lint
3. type check
4. unit tests
5. native tests
6. integration tests
7. build
8. security scanning
9. artifact creation

Production deployment must require successful checks.

==================================================
65. DOCUMENTATION
==================================================

Create:

README.md
ARCHITECTURE.md
CONTRIBUTING.md
SECURITY.md
API.md
DATABASE.md
MEDIA_ENGINE.md
AI_ARCHITECTURE.md
DEPLOYMENT.md
TROUBLESHOOTING.md

Document all major architectural decisions.

==================================================
66. PROJECT STRUCTURE
==================================================

Prefer a monorepo.

Example:

apps/
    desktop/
    web/
    api/

packages/
    ui/
    types/
    config/
    protocol/
    api-client/

native/
    media-engine/
    capture/
    audio/
    encoder/

services/
    ai/
    workers/
    analytics/

infra/
    docker/
    kubernetes/
    terraform/

docs/

tests/

==================================================
67. TYPED CONTRACTS
==================================================

Shared types should be generated or centrally defined.

Avoid duplicate DTO definitions.

API contracts must be strongly typed.

==================================================
68. MEDIA ENGINE IPC
==================================================

Create a versioned IPC protocol.

Example:

MediaEngineCommand
MediaEngineEvent

Commands:

START_STREAM
STOP_STREAM
START_RECORDING
STOP_RECORDING
SWITCH_SCENE
ADD_SOURCE
REMOVE_SOURCE
SET_AUDIO_LEVEL

Events:

STREAM_STARTED
STREAM_STOPPED
STREAM_ERROR
ENCODER_ERROR
DEVICE_ERROR
NETWORK_CHANGED
STATS_UPDATED

==================================================
69. STREAM STATE MACHINE
==================================================

Do NOT manage stream state using random booleans.

Implement a proper state machine.

Example:

IDLE
PREPARING
CONNECTING
LIVE
RECONNECTING
DEGRADED
STOPPING
STOPPED
ERROR
RECOVERING

Invalid transitions must be rejected.

==================================================
70. RECORDING STATE MACHINE
==================================================

Example:

IDLE
STARTING
RECORDING
PAUSED
STOPPING
FINALIZING
COMPLETED
RECOVERY_REQUIRED
FAILED

==================================================
71. DESTINATION STATE MACHINE
==================================================

Each destination independently:

DISCONNECTED
AUTHENTICATING
CONNECTING
LIVE
RECONNECTING
ERROR
STOPPED

One destination failure must not automatically terminate others.

==================================================
72. AI JOB STATE MACHINE
==================================================

QUEUED
PROCESSING
COMPLETED
FAILED
CANCELLED
RETRYING

==================================================
73. DESIGN PRINCIPLE
==================================================

Prefer boring, reliable engineering over clever engineering.

Do not introduce a technology simply because it is popular.

Every technology must have a reason.

For every major architectural decision, explain:

Why?
Tradeoffs?
Failure mode?
Scalability?
Operational cost?
Security implications?

==================================================
74. UI REQUIREMENTS
==================================================

The UI must look like a professional desktop application.

Avoid:

- generic dashboard templates
- excessive gradients
- unnecessary animations
- huge cards
- fake charts
- placeholder buttons

Use:

- compact controls
- clear hierarchy
- keyboard shortcuts
- tooltips
- status indicators
- context menus
- accessible controls

Important actions must have confirmation where destructive.

==================================================
75. KEYBOARD SHORTCUTS
==================================================

Support configurable shortcuts.

Examples:

Start/stop stream
Start/stop recording
Switch scene
Mute microphone
Push-to-talk
Toggle chat
Mark highlight

==================================================
76. ACCESSIBILITY
==================================================

Support:

- keyboard navigation
- screen-reader-friendly labels where applicable
- sufficient contrast
- scalable text
- clear status indicators
- non-color-only error indicators

==================================================
77. TELEMETRY
==================================================

Do not collect unnecessary personal information.

Allow users to opt out of non-essential telemetry.

Telemetry should focus on:

- crashes
- performance
- errors
- feature usage

Never collect secrets.

==================================================
78. STARTUP EXPERIENCE
==================================================

First launch should have a setup wizard.

Steps:

1. Account
2. Camera
3. Microphone
4. Encoder
5. Network test
6. Streaming destination
7. Scene setup
8. Optional AI configuration

Run diagnostics.

==================================================
79. STREAM DIAGNOSTICS
==================================================

Create a diagnostics page.

Show:

CPU
GPU
RAM
Disk
Network
Upload bandwidth
Latency
Packet loss
Encoder
Camera
Microphone
Dropped frames

Give actionable recommendations.

==================================================
80. FINAL PRODUCT WORKFLOW
==================================================

The complete workflow should be:

USER OPENS APP
       |
       v
SYSTEM HEALTH CHECK
       |
       v
CREATE/SELECT SCENE
       |
       v
SELECT STREAM MODE
       |
       +-----------------------------+
       |             |               |
       v             v               v
   INTERNET       OFFLINE           LAN
      LIVE          MODE            LIVE
       |             |               |
       +-------------+---------------+
                     |
                     v
                STREAM SESSION
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
     VIDEO         AUDIO         CHAT
       |             |             |
       +-------------+-------------+
                     |
                     v
                 AI ENGINE
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
   Highlights     Analytics     Copilot
       |
       v
   STREAM ENDS
       |
       v
BACKGROUND PROCESSING
       |
       +-------------+-------------+
       |             |             |
       v             v             v
    Clips        Chapters       Summary
       |
       v
CONTENT STUDIO
       |
       +-------------+-------------+
       |             |             |
       v             v             v
    Shorts        Posts        Thumbnails
       |
       v
CREATOR ANALYTICS
       |
       v
STREAM MEMORY