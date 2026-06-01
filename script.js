const STORAGE_KEY = "sweet-heart-birthday-gift.v1";
const GSAP = window.gsap ?? null;
const MATTER = window.Matter ?? null;

// All editable copy and content live here so the page stays easy to personalize.
const SITE_CONFIG = {
  topbarTitle: "从 2022 开始喜欢你",
  birthdayDate: "2026-07-05",
  relationshipStart: "2022-07-05",
  letter: {
    greeting: "给最特别的你",
    paragraphs: [
      "生日快到了，我一直在想，要用什么样的话，才能把我喜欢你这件事说得刚刚好。后来我发现，好像不管用多华丽的词，最后都会变成一句很简单的话: 有你在身边，我真的很幸福。",
      "你让很多普通的小日子都变得亮晶晶的。一起吃饭、一起散步、一起分享奇奇怪怪的想法，这些看起来平凡的小瞬间，慢慢就成了我最珍贵的收藏。",
      "这次给你做这个小网页，不只是想说生日快乐，也是想认真地告诉你: 我会一直把你放在心上，继续陪你收集新的回忆、制造新的惊喜，把喜欢写成很长很长的以后。",
      "希望你打开它的时候，能感受到我偷偷放进去的每一点偏爱。生日快乐呀，我的女孩。"
    ],
    signature: "永远偏爱你的我"
  },
  memories: [
    {
      title: "第一次约会",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDnBBJ755-OLEqn1INi_5qOpg1N98twRwx-p0xFEeB0RpCuzhi_dyQESKbyBDJk089GuKPEJFtYXEPRA91YEmY_4UIIwLzed0WgEODaGAkFatHHPuaq-7ki4FtpRiQjqWJqDuJYhoEOxqXLYkyi-TlCb4phTQ-D4rOcxiSJzXGdqa3rR-P8AFijSwOgSU8cLAnnWAh1arDoezmPQo14Od7ALxodQA8VlvUwdb_gdGyglvhYtTLFXot_DZQNSpaMEln8tnfIurHA6GF"
    },
    {
      title: "一起喝咖啡",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO0FuDvOPu4-Zu09A-U_L4fkG7ZDxH3rYJhsJ9AwKJQmUsGeiyF60m0i7Z7PMwy8pq0rKGoC_lb2NUO20P8ChUCCkUe4UNMnUb6S1l37itImwOzYuQ__VXrrukFSqBWGmiyzdsBf2lZrvb1aweGcTWYcfBp5MFHYFtiIENr2XmUnYusE47AZxEfKehlKJbwkj8owupzW9T0OzfLA18PMzILs0xmz2XUoWu6Qysf32ACDl3YPFRfTZMcQ2KVvdv_J0zdLGpPYMOmAST"
    },
    {
      title: "我们的小碎片",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6OLNyS4RRuawy-5YsJweMlyTxKpRQWDyBJGWYBcNHeKrC4-6ES26HoSvqrIBwVP7fPMLqjwmtUJ3pkrQEszWdFqkgM5qYZD8dg_4jrlvbih6W5RzDP4-c5P0az8cyGHDQIYYy9Wzcqq3P2Z3pBYfhucw1A2719CSe2aJkdYlvEqtFTRd9ikcHL3y096pPFb-MmbkFXr0DWCT1X_1OW5gpTsdptdAAl_j_92UoXlxqFdKQDJOONI6h_FHbNzJYWvvqfbEnBqm4I9Zg"
    }
  ],
  prizes: [
    {
      id: "heytea-cake",
      name: "喜茶小蛋糕",
      subtitle: "甜甜心意，今天的小确幸",
      description: "一份粉嫩又好吃的喜茶小蛋糕，庆祝这一天只属于你。",
      image: "assets/prizes/heytea-cake.png",
      tone: "pink",
      weight: 20
    },
    {
      id: "wechat-red-packet",
      name: "520 微信红包",
      subtitle: "心意到账，爱意也到账",
      description: "专属 520 微信红包一份，数字不大不小，刚好把偏爱说清楚。",
      image: "assets/prizes/wechat-red-packet-520.png",
      tone: "rose",
      weight: 18
    },
    {
      id: "dji-pocket-3",
      name: "大疆 Pocket 3",
      subtitle: "把开心的瞬间都拍下来",
      description: "轻巧好带的大疆 Pocket 3，以后一起出门随手记录更多回忆。",
      image: "assets/prizes/dji-pocket-3.png",
      tone: "cream",
      weight: 6
    },
    {
      id: "airpods-pro-3",
      name: "AirPods Pro 3",
      subtitle: "把喜欢的声音戴在耳边",
      description: "一副新的 AirPods Pro 3，让通勤、散步和想你的时候都更好听。",
      image: "assets/prizes/airpods-pro-3.png",
      tone: "pearl",
      weight: 7
    },
    {
      id: "happy-birthday",
      name: "生日快乐",
      subtitle: "今天的主角当然是你",
      description: "一张生日快乐特别卡，外加我认真准备好的祝福，愿你岁岁都被偏爱。",
      image: "assets/prizes/happy-birthday-card.png",
      tone: "lavender",
      weight: 14
    },
    {
      id: "takeout-mystery-box",
      name: "外卖盲盒",
      subtitle: "打开看看今晚吃什么惊喜",
      description: "外卖盲盒一份，奶茶、炸鸡、披萨还是宵夜，由你拆出今天的快乐。",
      image: "assets/prizes/takeout-mystery-box.png",
      tone: "peach",
      weight: 18
    },
    {
      id: "skincare-reimbursement",
      name: "520 护肤品报销额度",
      subtitle: "想买的护肤品放心挑",
      description: "520 元护肤品报销额度已到账，你看中的那一瓶这次放心入。",
      image: "assets/prizes/skincare-reimbursement-520.png",
      tone: "pink",
      weight: 17
    }
  ]
};

const elements = {
  screens: [...document.querySelectorAll(".screen")],
  tabButtons: [...document.querySelectorAll(".tab-button")],
  topbarTitle: document.getElementById("topbar-title"),
  memoryGrid: document.getElementById("memory-grid"),
  letterBody: document.getElementById("letter-body"),
  letterTitle: document.getElementById("letter-title"),
  letterSignature: document.getElementById("letter-signature"),
  journeyChip: document.getElementById("journey-chip"),
  journeyNumber: document.getElementById("journey-number"),
  journeyCopy: document.getElementById("journey-copy"),
  journeyMeta: document.getElementById("journey-meta"),
  giftGrid: document.getElementById("gift-grid"),
  giftModalGrid: document.getElementById("gift-grid-modal"),
  giftModalEyebrow: document.querySelector("#gift-modal .section-heading__eyebrow"),
  giftModalTitle: document.getElementById("gift-modal-title"),
  giftModalCopy: document.querySelector("#gift-modal .gift-modal__copy"),
  historyList: document.getElementById("history-list"),
  pocketList: document.getElementById("pocket-list"),
  coinCount: document.getElementById("quick-coin-count"),
  coinStrip: document.getElementById("gacha-quickbar"),
  historyCard: document.getElementById("history-card"),
  gachaIntro: document.getElementById("gacha-intro"),
  gachaStatus: document.getElementById("gacha-status"),
  streakNumber: document.getElementById("streak-number"),
  monthProgressText: document.getElementById("month-progress-text"),
  monthProgressBar: document.getElementById("month-progress-bar"),
  calendarTitle: document.getElementById("calendar-title"),
  calendarGrid: document.getElementById("calendar-grid"),
  loveNotesCount: document.getElementById("love-notes-count"),
  rewardCoinsCount: document.getElementById("reward-coins-count"),
  surpriseCount: document.getElementById("surprise-count"),
  favoriteButton: document.getElementById("favorite-button"),
  cakeButton: document.getElementById("cake-button"),
  soundToggleButton: document.getElementById("sound-toggle-button"),
  soundToggleIcon: document.getElementById("sound-toggle-icon"),
  hugButton: document.getElementById("hug-button"),
  drawButton: document.getElementById("draw-button"),
  restoreGachaButton: document.getElementById("restore-gacha-button"),
  giftLaunch: document.getElementById("gift-launch"),
  recordLaunch: document.getElementById("record-launch"),
  checkinButton: document.getElementById("checkin-button"),
  prevMonth: document.getElementById("prev-month"),
  nextMonth: document.getElementById("next-month"),
  machine: document.getElementById("gacha-machine"),
  machineDome: document.getElementById("machine-dome"),
  capsuleCluster: document.getElementById("capsule-cluster"),
  machineBody: document.getElementById("machine-body"),
  machineRibbon: document.getElementById("machine-ribbon"),
  machineBadge: document.getElementById("machine-badge"),
  machineKnob: document.getElementById("machine-knob"),
  machineSlot: document.getElementById("machine-slot"),
  machineHalo: document.getElementById("machine-halo"),
  machineStage: document.getElementById("reveal-stage"),
  machineStageGlow: document.getElementById("reveal-stage-glow"),
  revealCapsule: document.getElementById("reveal-capsule"),
  revealShellTop: document.getElementById("reveal-shell-top"),
  revealShellBottom: document.getElementById("reveal-shell-bottom"),
  revealSeam: document.getElementById("reveal-seam"),
  revealCapsuleCore: document.getElementById("reveal-capsule-core"),
  revealPrizeIcon: document.getElementById("reveal-prize-icon"),
  revealTitle: document.getElementById("reveal-title"),
  revealDesc: document.getElementById("reveal-desc"),
  revealTip: document.getElementById("reveal-tip"),
  machineCapsules: [...document.querySelectorAll(".capsule-slot")],
  machineCapsuleVisuals: [...document.querySelectorAll("[data-capsule]")],
  machineStars: [...document.querySelectorAll(".machine__star")],
  quickbarItems: [...document.querySelectorAll(".gacha-quickbar__item")],
  giftModal: document.getElementById("gift-modal"),
  giftModalBackdrop: document.getElementById("gift-modal-backdrop"),
  giftModalDialog: document.querySelector("#gift-modal .modal__dialog"),
  giftModalClose: document.getElementById("gift-modal-close"),
  recordModal: document.getElementById("record-modal"),
  recordModalBackdrop: document.getElementById("record-modal-backdrop"),
  recordModalDialog: document.querySelector("#record-modal .modal__dialog"),
  recordModalClose: document.getElementById("record-modal-close"),
  recordModalList: document.getElementById("history-list-modal"),
  modal: document.getElementById("prize-modal"),
  modalBackdrop: document.getElementById("modal-backdrop"),
  modalDialog: document.querySelector("#prize-modal .modal__dialog"),
  modalIcon: document.getElementById("modal-icon"),
  modalTitle: document.getElementById("modal-title"),
  modalCopy: document.getElementById("modal-copy"),
  modalClose: document.getElementById("modal-close"),
  imagePreviewModal: document.getElementById("image-preview-modal"),
  imagePreviewBackdrop: document.getElementById("image-preview-backdrop"),
  imagePreviewDialog: document.querySelector("#image-preview-modal .image-preview-modal__dialog"),
  imagePreviewClose: document.getElementById("image-preview-close"),
  imagePreviewImage: document.getElementById("image-preview-image"),
  imagePreviewTitle: document.getElementById("image-preview-title"),
  toast: document.getElementById("toast"),
  particles: document.getElementById("particles")
};

const GACHA_PHASE = Object.freeze({
  IDLE: "idle",
  DRAWING: "drawing",
  CAPSULE_READY: "capsule-ready",
  OPENING: "opening"
});

const GACHA_CAPSULE_TONES = ["pink", "lavender", "peach", "cream", "rose", "pearl"];
const DEFAULT_GACHA_COINS = 5;
const GACHA_PHYSICS_CONFIG = Object.freeze({
  drawDuration: 980,
  gravityScale: 0.001,
  gravityY: 1.08,
  releaseDuration: 0.34
});
const GACHA_SOUND_CONFIG = Object.freeze({
  draw: {
    src: "assets/audio/gacha-click.mp3",
    volume: 0.78
  },
  reveal: {
    src: "assets/audio/gacha-reveal.mp3",
    volume: 0.82
  }
});
const AUDIO_UI_COPY = Object.freeze({
  disableLabel: "\u5173\u95ed\u58f0\u97f3",
  enableLabel: "\u5f00\u542f\u58f0\u97f3",
  enabledToast: "\u58f0\u97f3\u5df2\u7ecf\u6253\u5f00\u5566",
  disabledToast: "\u58f0\u97f3\u5df2\u7ecf\u5173\u95ed\u5566"
});
const GACHA_QUICKBAR_COPY = Object.freeze({
  balanceLabel: "\u626d\u86cb\u5e01",
  balanceMeta: "",
  poolLabel: "",
  poolTitle: "\u5956\u6c60",
  recordsLabel: "",
  recordsTitle: "\u8bb0\u5f55",
  actionHint: ""
});
const GACHA_GIFT_MODAL_COPY = Object.freeze({
  eyebrow: "Prize Pool",
  title: "\u5956\u6c60\u793c\u7269",
  copy: "\u8fd9\u91cc\u662f\u73b0\u5728\u53ef\u80fd\u62bd\u5230\u7684\u5c0f\u60ca\u559c\uff0c\u626d\u4e00\u53d1\u5c31\u6709\u673a\u4f1a\u628a\u5b83\u4eec\u5e26\u56de\u5bb6\u3002"
});
const GACHA_RECORD_MODAL_COPY = Object.freeze({
  eyebrow: "Collected Gifts",
  title: "\u793c\u7269\u8bb0\u5f55",
  copy: "\u8fd9\u91cc\u4f1a\u6536\u8d77\u5979\u5df2\u7ecf\u62bd\u5230\u7684\u5c0f\u60ca\u559c\u3002",
  closeLabel: "\u5173\u95ed\u793c\u7269\u8bb0\u5f55"
});
const GACHA_HISTORY_COPY = Object.freeze({
  emptyTitle: "\u8fd8\u6ca1\u6709\u62bd\u5230\u793c\u7269",
  emptyHint: "\u5148\u53bb\u626d\u4e00\u53d1\uff0c\u8fd9\u91cc\u5c31\u4f1a\u6536\u85cf\u5979\u7684\u6240\u6709\u5c0f\u60ca\u559c\u3002"
});

const state = loadState();
let gachaMotion = null;
let gachaState = buildGachaState();
let gachaPhysics = null;
let gachaResizeTimer = null;
let toastTimer = null;
let resolveCapsuleOpen = null;
const managedAudio = new Set();
const gachaAudio = createGachaAudio();

bootstrap();

function bootstrap() {
  applyRequestedView();
  restoreGachaCoinsOnce();
  normalizeGachaQuickbar();
  ensureRecordModal();
  initializeCapsuleMetadata();
  normalizeSoundToggleButton();
  syncManagedAudioState();
  renderStaticContent();
  bindEvents();
  initializeGsap();
  renderApp();

  if (state.activeView === "gacha") {
    queueMicrotask(() => playGachaEntrance(true));
  }
}

function createGachaAudio() {
  return {
    draw: createUiAudio(GACHA_SOUND_CONFIG.draw.src, GACHA_SOUND_CONFIG.draw.volume),
    reveal: createUiAudio(GACHA_SOUND_CONFIG.reveal.src, GACHA_SOUND_CONFIG.reveal.volume)
  };
}

function normalizeGachaQuickbar() {
  if (!elements.coinStrip) {
    return;
  }

  elements.coinStrip.innerHTML = `
    <div class="gacha-quickbar__item gacha-quickbar__item--balance">
      <div class="gacha-balance-chip" id="gacha-balance-card" aria-label="\u626d\u86cb\u5e01\u4f59\u989d">
        <span class="material-symbols-outlined filled">confirmation_number</span>
        <span class="gacha-balance-chip__label">${GACHA_QUICKBAR_COPY.balanceLabel}</span>
        <strong class="gacha-balance-chip__value" id="quick-coin-count">${state.gachaCoins}</strong>
      </div>
    </div>
    <div class="gacha-quickbar__buttons">
      <div class="gacha-quickbar__item">
        <button
          class="gacha-orb gacha-orb--action gacha-orb--pool"
          id="gift-launch"
          type="button"
          aria-controls="gift-modal"
          aria-haspopup="dialog"
          aria-label="\u67e5\u770b\u5956\u6c60"
        >
          <span class="gacha-orb__icon material-symbols-outlined filled">casino</span>
          <span class="gacha-orb__label">${GACHA_QUICKBAR_COPY.poolLabel}</span>
          <strong class="gacha-orb__title">${GACHA_QUICKBAR_COPY.poolTitle}</strong>
          <span class="gacha-orb__meta">${GACHA_QUICKBAR_COPY.actionHint}</span>
        </button>
      </div>
      <div class="gacha-quickbar__item">
        <button
          class="gacha-orb gacha-orb--action gacha-orb--records"
          id="record-launch"
          type="button"
          aria-controls="record-modal"
          aria-haspopup="dialog"
          aria-label="\u67e5\u770b\u8bb0\u5f55"
        >
          <span class="gacha-orb__icon material-symbols-outlined filled">redeem</span>
          <span class="gacha-orb__label">${GACHA_QUICKBAR_COPY.recordsLabel}</span>
          <strong class="gacha-orb__title">${GACHA_QUICKBAR_COPY.recordsTitle}</strong>
          <span class="gacha-orb__meta">${GACHA_QUICKBAR_COPY.actionHint}</span>
        </button>
      </div>
    </div>
  `;

  elements.coinCount = document.getElementById("quick-coin-count");
  elements.giftLaunch = document.getElementById("gift-launch");
  elements.recordLaunch = document.getElementById("record-launch");
  elements.quickbarItems = [...elements.coinStrip.querySelectorAll(".gacha-quickbar__item")];
}

function ensureRecordModal() {
  if (elements.recordModal) {
    return;
  }

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "record-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="modal__backdrop" id="record-modal-backdrop"></div>
    <div class="modal__dialog modal__dialog--sheet glass-card" role="dialog" aria-modal="true" aria-labelledby="record-modal-title">
      <div class="gift-modal__header">
        <div>
          <p class="section-heading__eyebrow">${GACHA_RECORD_MODAL_COPY.eyebrow}</p>
          <h2 id="record-modal-title">${GACHA_RECORD_MODAL_COPY.title}</h2>
          <p class="gift-modal__copy">${GACHA_RECORD_MODAL_COPY.copy}</p>
        </div>
        <button class="icon-button icon-button--soft" id="record-modal-close" type="button" aria-label="${GACHA_RECORD_MODAL_COPY.closeLabel}">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div class="history-list history-list--modal" id="history-list-modal"></div>
    </div>
  `;

  if (elements.modal?.parentNode) {
    elements.modal.parentNode.insertBefore(modal, elements.modal);
  } else {
    document.body.append(modal);
  }

  elements.recordModal = modal;
  elements.recordModalBackdrop = modal.querySelector("#record-modal-backdrop");
  elements.recordModalDialog = modal.querySelector(".modal__dialog");
  elements.recordModalClose = modal.querySelector("#record-modal-close");
  elements.recordModalList = modal.querySelector("#history-list-modal");
}

function normalizeSoundToggleButton() {
  const mountTarget = document.querySelector(".app-shell") || document.body;
  const button = document.createElement("button");
  button.className = "icon-button sound-toggle-fab";
  button.id = "sound-toggle-button";
  button.type = "button";
  button.setAttribute("role", "switch");
  button.setAttribute("aria-checked", "true");
  button.setAttribute("aria-label", AUDIO_UI_COPY.disableLabel);
  button.title = AUDIO_UI_COPY.disableLabel;

  const icon = document.createElement("span");
  icon.className = "material-symbols-outlined filled";
  icon.id = "sound-toggle-icon";
  icon.textContent = "volume_up";

  button.append(icon);
  elements.soundToggleButton?.remove();
  mountTarget.append(button);
  elements.soundToggleButton = button;
  elements.soundToggleIcon = icon;
}

function registerManagedAudio(audio) {
  if (!audio) {
    return null;
  }

  managedAudio.add(audio);
  syncManagedAudioElement(audio);
  return audio;
}

function syncManagedAudioElement(audio) {
  if (!audio) {
    return;
  }

  audio.muted = !state.audioEnabled;

  if (!state.audioEnabled) {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (error) {
      // Ignore pause/reset failures while muting the audio system.
    }
  }
}

function syncManagedAudioState() {
  managedAudio.forEach((audio) => {
    syncManagedAudioElement(audio);
  });
}

function createUiAudio(src, volume = 1) {
  if (typeof Audio !== "function") {
    return null;
  }

  try {
    const audio = new Audio(new URL(src, window.location.href).href);
    audio.preload = "auto";
    audio.volume = volume;
    audio.playsInline = true;
    audio.setAttribute("playsinline", "");
    audio.load();
    return registerManagedAudio(audio);
  } catch (error) {
    return null;
  }
}

function renderAudioToggle() {
  if (!elements.soundToggleButton || !elements.soundToggleIcon) {
    return;
  }

  const enabled = state.audioEnabled;
  elements.soundToggleButton.setAttribute("aria-checked", String(enabled));
  elements.soundToggleButton.setAttribute("aria-label", enabled ? AUDIO_UI_COPY.disableLabel : AUDIO_UI_COPY.enableLabel);
  elements.soundToggleButton.title = enabled ? AUDIO_UI_COPY.disableLabel : AUDIO_UI_COPY.enableLabel;
  elements.soundToggleButton.classList.toggle("is-muted", !enabled);
  elements.soundToggleIcon.textContent = enabled ? "volume_up" : "volume_off";
  elements.soundToggleIcon.classList.toggle("filled", enabled);
}

function setAudioEnabled(enabled, options = {}) {
  const { silent = false } = options;

  if (state.audioEnabled === enabled) {
    renderAudioToggle();
    syncManagedAudioState();
    return;
  }

  state.audioEnabled = enabled;
  syncManagedAudioState();
  renderAudioToggle();
  saveState();

  if (!silent) {
    showToast(enabled ? AUDIO_UI_COPY.enabledToast : AUDIO_UI_COPY.disabledToast);
  }
}

function handleAudioToggle() {
  setAudioEnabled(!state.audioEnabled);
}

function playGachaSound(key) {
  if (!state.audioEnabled) {
    return;
  }

  const audio = gachaAudio[key];
  if (!audio) {
    return;
  }

  try {
    audio.pause();
    audio.currentTime = 0;
  } catch (error) {
    // Ignore reset issues and still try to play.
  }

  const playback = audio.play();
  playback?.catch?.(() => {});
}

function initializeCapsuleMetadata() {
  elements.machineCapsules.forEach((slot, index) => {
    if (!slot.dataset.baseTone) {
      slot.dataset.baseTone = slot.dataset.tone;
    }

    slot.dataset.capsuleId = String(index);
  });
}

function restoreGachaCoinsOnce() {
  if (state.gachaCoins >= DEFAULT_GACHA_COINS || state.temporaryGachaRestoreApplied) {
    return;
  }

  state.gachaCoins = DEFAULT_GACHA_COINS;
  state.temporaryGachaRestoreApplied = true;
  saveState();
}

function renderStaticContent() {
  elements.topbarTitle.textContent = SITE_CONFIG.topbarTitle;
  elements.letterTitle.textContent = SITE_CONFIG.letter.greeting;
  elements.letterSignature.textContent = SITE_CONFIG.letter.signature;
  elements.giftModalEyebrow.textContent = GACHA_GIFT_MODAL_COPY.eyebrow;
  elements.giftModalTitle.textContent = GACHA_GIFT_MODAL_COPY.title;
  elements.giftModalCopy.textContent = GACHA_GIFT_MODAL_COPY.copy;
  elements.letterBody.innerHTML = SITE_CONFIG.letter.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  renderMemoryGrid();
  renderGiftGrid();
}

function bindEvents() {
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isGachaLocked() && button.dataset.view !== state.activeView) {
        showToast(getGachaLockedMessage());
        return;
      }

      switchView(button.dataset.view);
    });
  });

  elements.favoriteButton.addEventListener("click", () => {
    burstHearts(elements.favoriteButton, 9);
    showToast("爱心已经偷偷飘到她身边啦。");
  });

  elements.soundToggleButton?.addEventListener("click", handleAudioToggle);

  elements.cakeButton.addEventListener("click", () => {
    const countdown = getBirthdayCountdown();
    if (countdown > 0) {
      showToast(`距离 ${formatBirthdayLabel()} 还有 ${countdown} 天，惊喜正在发酵中。`);
      return;
    }

    showToast(`今天就是 ${formatBirthdayLabel()}，生日快乐呀。`);
  });

  elements.hugButton.addEventListener("click", () => {
    state.hugsSent += 1;
    saveState();
    burstHearts(elements.hugButton, 12);
    renderJourneyCard();
    showToast("抱抱已送达，希望她能隔着屏幕收到。");
  });

  elements.drawButton.addEventListener("click", handleDraw);
  elements.machineKnob.addEventListener("click", handleDraw);
  elements.restoreGachaButton.addEventListener("click", handleRestoreGachaCoins);
  elements.giftLaunch.addEventListener("click", openGiftModal);
  elements.recordLaunch?.addEventListener("click", openRecordModal);
  elements.revealCapsule.addEventListener("click", handleRevealCapsule);
  elements.checkinButton.addEventListener("click", handleCheckIn);
  elements.prevMonth.addEventListener("click", () => changeMonth(-1));
  elements.nextMonth.addEventListener("click", () => changeMonth(1));
  elements.giftModalClose.addEventListener("click", () => closeGiftModal());
  elements.giftModalBackdrop.addEventListener("click", () => closeGiftModal());
  elements.recordModalClose?.addEventListener("click", () => closeRecordModal());
  elements.recordModalBackdrop?.addEventListener("click", () => closeRecordModal());
  elements.modalClose.addEventListener("click", closeModal);
  elements.modalBackdrop.addEventListener("click", closeModal);
  elements.imagePreviewClose?.addEventListener("click", () => closeImagePreview());
  elements.imagePreviewBackdrop?.addEventListener("click", () => closeImagePreview());
  document.addEventListener("click", handlePrizeImagePreviewClick);
  window.addEventListener("resize", handleGachaViewportResize);

  document.addEventListener("keydown", (event) => {
    const previewTrigger = getPrizeImagePreviewTrigger(event.target);

    if ((event.key === "Enter" || event.key === " ") && previewTrigger) {
      event.preventDefault();
      openImagePreviewFromTrigger(previewTrigger);
      return;
    }

    if (event.key === "Escape") {
      if (!elements.imagePreviewModal?.hidden) {
        closeImagePreview();
        return;
      }

      closeGiftModal();
      closeRecordModal();
      closeModal();
    }
  });
}

function initializeGsap() {
  if (!GSAP) {
    return;
  }

  document.body.classList.add("has-gsap");
  GSAP.defaults({ duration: 0.55, ease: "power2.out" });

  gachaMotion = {
    mm: GSAP.matchMedia(),
    reduceMotion: false,
    hasEntered: false,
    idleTl: null,
    introTl: null,
    drawTl: null,
    openTl: null,
    giftModalTl: null,
    recordModalTl: null,
    modalTl: null
  };

  gachaMotion.mm.add(
    {
      reduceMotion: "(prefers-reduced-motion: reduce)",
      allowMotion: "(prefers-reduced-motion: no-preference)"
    },
    (context) => {
      gachaMotion.reduceMotion = Boolean(context.conditions.reduceMotion);
      stopTimeline(gachaMotion.idleTl);
      stopTimeline(gachaMotion.introTl);
      stopTimeline(gachaMotion.drawTl);
      stopTimeline(gachaMotion.openTl);
      stopTimeline(gachaMotion.giftModalTl);
      stopTimeline(gachaMotion.recordModalTl);
      stopTimeline(gachaMotion.modalTl);
      resetGachaTransforms();

      if (context.conditions.allowMotion) {
        gachaMotion.idleTl = createIdleTimeline();
      }

      if (state.activeView === "gacha" && context.conditions.allowMotion) {
        queueMicrotask(() => playGachaEntrance(true));
      }

      return () => {
        stopTimeline(gachaMotion.idleTl);
        stopTimeline(gachaMotion.introTl);
        stopTimeline(gachaMotion.drawTl);
        stopTimeline(gachaMotion.openTl);
        stopTimeline(gachaMotion.giftModalTl);
        stopTimeline(gachaMotion.recordModalTl);
        stopTimeline(gachaMotion.modalTl);
        resetGachaTransforms();
      };
    }
  );
}

function handleGachaViewportResize() {
  if (!MATTER) {
    return;
  }

  clearTimeout(gachaResizeTimer);
  gachaResizeTimer = setTimeout(() => {
    if (state.activeView !== "gacha" || gachaState.phase !== GACHA_PHASE.IDLE) {
      return;
    }

    initializeGachaPhysics(true);
  }, 140);
}

function initializeGachaPhysics(force = false) {
  if (!MATTER || gachaMotion?.reduceMotion) {
    return null;
  }

  const clusterWidth =
    elements.capsuleCluster.clientWidth ||
    elements.capsuleCluster.offsetWidth ||
    elements.capsuleCluster.getBoundingClientRect().width;
  const clusterHeight =
    elements.capsuleCluster.clientHeight ||
    elements.capsuleCluster.offsetHeight ||
    elements.capsuleCluster.getBoundingClientRect().height;

  // `getBoundingClientRect()` includes ancestor transforms, which compresses the
  // physics area on small screens because `.machine-wrap` is scaled down there.
  if (!clusterWidth || !clusterHeight) {
    return null;
  }

  const width = Math.round(clusterWidth);
  const height = Math.round(clusterHeight);

  if (gachaPhysics && !force && gachaPhysics.width === width && gachaPhysics.height === height) {
    return gachaPhysics;
  }

  destroyGachaPhysics();

  const { Engine, Bodies, Body, Composite } = MATTER;
  const engine = Engine.create({
    gravity: { x: 0, y: GACHA_PHYSICS_CONFIG.gravityY, scale: GACHA_PHYSICS_CONFIG.gravityScale },
    enableSleeping: false,
    positionIterations: 8,
    velocityIterations: 6
  });

  const boundaries = buildGachaPhysicsBoundaries(Bodies, width, height);
  const capsules = elements.machineCapsules.map((slot, index) => {
    const metrics = readCapsuleSlotMetrics(slot, width, height);
    const body = Bodies.circle(metrics.x, metrics.y, metrics.radius, {
      restitution: 0.72,
      friction: 0.01,
      frictionAir: 0.015,
      frictionStatic: 0.02,
      density: 0.0012,
      slop: 0.28
    });

    Body.setAngle(body, degreesToRadians(randomBetween(-8, 8)));

    return {
      id: index,
      slot,
      body,
      radius: metrics.radius,
      baseTone: slot.dataset.baseTone || slot.dataset.tone,
      extracted: false
    };
  });

  Composite.add(engine.world, [...boundaries, ...capsules.map((capsule) => capsule.body)]);

  gachaPhysics = {
    engine,
    width,
    height,
    capsules,
    drawState: null,
    rafId: null,
    lastTime: null
  };

  document.body.classList.add("has-gacha-physics");
  syncGachaPhysicsToDom(true);
  startGachaPhysicsLoop();
  return gachaPhysics;
}

function destroyGachaPhysics() {
  if (!gachaPhysics) {
    return;
  }

  if (gachaPhysics.rafId) {
    cancelAnimationFrame(gachaPhysics.rafId);
  }

  stopTimeline(gachaPhysics.drawState?.releaseTl);

  elements.machineCapsules.forEach((slot) => {
    slot.classList.remove("is-extracted");
    slot.dataset.tone = slot.dataset.baseTone || slot.dataset.tone;
    slot.style.left = "";
    slot.style.top = "";
    slot.style.transform = "";
    slot.style.zIndex = "";
    slot.style.opacity = "";
    slot.style.visibility = "";
  });

  gachaPhysics = null;
}

function buildGachaPhysicsBoundaries(Bodies, width, height) {
  const wallOptions = {
    isStatic: true,
    restitution: 0.34,
    friction: 0.02
  };

  return [
    Bodies.rectangle(width / 2, height + 18, width * 1.06, 34, wallOptions),
    Bodies.rectangle(-14, height * 0.56, 30, height * 1.12, { ...wallOptions, angle: degreesToRadians(-5) }),
    Bodies.rectangle(width + 14, height * 0.56, 30, height * 1.12, { ...wallOptions, angle: degreesToRadians(5) }),
    Bodies.rectangle(width * 0.21, -12, width * 0.34, 18, { ...wallOptions, angle: degreesToRadians(-18) }),
    Bodies.rectangle(width * 0.5, -18, width * 0.26, 20, wallOptions),
    Bodies.rectangle(width * 0.79, -12, width * 0.34, 18, { ...wallOptions, angle: degreesToRadians(18) })
  ];
}

function readCapsuleSlotMetrics(slot, width, height) {
  const xPercent = parseFloat(slot.style.getPropertyValue("--x")) || 50;
  const yPercent = parseFloat(slot.style.getPropertyValue("--y")) || 50;
  const size =
    parseFloat(slot.style.getPropertyValue("--size")) ||
    slot.clientWidth ||
    slot.offsetWidth ||
    slot.getBoundingClientRect().width ||
    64;

  return {
    x: (xPercent / 100) * width,
    y: (yPercent / 100) * height,
    size,
    radius: size * 0.48
  };
}

function startGachaPhysicsLoop() {
  if (!gachaPhysics || gachaPhysics.rafId) {
    return;
  }

  const step = (timestamp) => {
    if (!gachaPhysics) {
      return;
    }

    gachaPhysics.rafId = requestAnimationFrame(step);

    if (state.activeView !== "gacha" || document.hidden) {
      gachaPhysics.lastTime = timestamp;
      return;
    }

    const delta = gachaPhysics.lastTime ? Math.min(24, timestamp - gachaPhysics.lastTime) : 16.67;
    gachaPhysics.lastTime = timestamp;

    updateGachaPhysicsDraw(timestamp);
    MATTER.Engine.update(gachaPhysics.engine, delta);
    syncGachaPhysicsToDom();
  };

  gachaPhysics.rafId = requestAnimationFrame(step);
}

function syncGachaPhysicsToDom(force = false) {
  if (!gachaPhysics) {
    return;
  }

  gachaPhysics.capsules.forEach((capsule) => {
    if (capsule.extracted) {
      return;
    }

    const { slot, body } = capsule;
    slot.classList.remove("is-extracted");
    slot.style.left = `${body.position.x}px`;
    slot.style.top = `${body.position.y}px`;
    slot.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
    slot.style.zIndex = `${Math.round(body.position.y)}`;

    if (force) {
      slot.style.opacity = "1";
      slot.style.visibility = "visible";
    }
  });
}

function beginGachaPhysicsDraw(tone) {
  const physics = initializeGachaPhysics();
  if (!physics) {
    return false;
  }

  stopTimeline(physics.drawState?.releaseTl);
  physics.drawState = {
    tone,
    startedAt: performance.now(),
    duration: GACHA_PHYSICS_CONFIG.drawDuration,
    released: false,
    releaseTl: null
  };

  return true;
}

function updateGachaPhysicsDraw(timestamp) {
  if (!gachaPhysics?.drawState || gachaPhysics.drawState.released) {
    return;
  }

  const progress = Math.min((timestamp - gachaPhysics.drawState.startedAt) / gachaPhysics.drawState.duration, 1);
  const pulseStrength = 0.00003 + (1 - Math.abs(progress - 0.5) * 1.25) * 0.00004;
  const centerX = gachaPhysics.width / 2;
  const centerY = gachaPhysics.height * 0.56;

  gachaPhysics.capsules.forEach((capsule, index) => {
    if (capsule.extracted) {
      return;
    }

    const phase = timestamp * 0.012 + index * 1.37;
    const body = capsule.body;
    const centerPullX = (centerX - body.position.x) * 0.0000045;
    const centerPullY = (centerY - body.position.y) * 0.0000022;

    MATTER.Body.applyForce(body, body.position, {
      x: Math.sin(phase) * pulseStrength + centerPullX,
      y: (-pulseStrength * 0.92 + Math.cos(phase * 1.18) * pulseStrength * 0.42) + centerPullY
    });
  });

  if (progress >= 1) {
    gachaPhysics.drawState.released = true;
    releaseGachaPhysicsCapsule(gachaPhysics.drawState.tone);
  }
}

function chooseReleaseCapsule() {
  if (!gachaPhysics) {
    return null;
  }

  const centerX = gachaPhysics.width / 2;
  const targetY = gachaPhysics.height * 0.84;
  const candidates = gachaPhysics.capsules
    .filter((capsule) => !capsule.extracted)
    .map((capsule) => ({
      capsule,
      score:
        Math.abs(capsule.body.position.x - centerX) * 1.35 +
        Math.abs(capsule.body.position.y - targetY) * 0.9 +
        (Math.abs(capsule.body.velocity.x) + Math.abs(capsule.body.velocity.y)) * 16
    }))
    .sort((left, right) => left.score - right.score);

  const pool = candidates.slice(0, Math.min(3, candidates.length));
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return picked?.capsule ?? null;
}

function releaseGachaPhysicsCapsule(tone) {
  if (!gachaPhysics) {
    return;
  }

  const capsule = chooseReleaseCapsule();
  if (!capsule) {
    return;
  }

  capsule.extracted = true;
  capsule.slot.dataset.tone = tone;
  capsule.slot.classList.remove("is-extracted");
  capsule.slot.style.left = `${capsule.body.position.x}px`;
  capsule.slot.style.top = `${capsule.body.position.y}px`;
  capsule.slot.style.transform = `translate(-50%, -50%) rotate(${capsule.body.angle}rad)`;
  capsule.slot.style.zIndex = `${Math.round(gachaPhysics.height + 40)}`;

  MATTER.Composite.remove(gachaPhysics.engine.world, capsule.body);

  if (!GSAP) {
    capsule.slot.classList.add("is-extracted");
    return;
  }

  gachaPhysics.drawState.releaseTl = GSAP.timeline();
  gachaPhysics.drawState.releaseTl
    .to(
      capsule.slot,
      {
        left: gachaPhysics.width / 2 + randomBetween(-8, 8),
        top: gachaPhysics.height + capsule.radius * 1.4,
        rotation: `+=${randomBetween(-70, 70)}`,
        scale: randomBetween(0.92, 0.98),
        duration: GACHA_PHYSICS_CONFIG.releaseDuration,
        ease: "power3.in"
      },
      0
    )
    .to(capsule.slot, { autoAlpha: 0, duration: 0.08, ease: "power1.out" }, 0.22)
    .call(() => {
      capsule.slot.classList.add("is-extracted");
    });
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function renderApp() {
  renderAudioToggle();
  renderActiveView();
  renderJourneyCard();
  renderGachaPanel();
  renderDailyPanel();
  renderPocketList();
  renderRewardStats();
}

function renderActiveView() {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.view === state.activeView);
  });

  elements.tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.activeView);
  });
}

function renderJourneyCard() {
  const countdown = getBirthdayCountdown();
  const togetherDays = getTogetherDays();
  const birthdayLabel = formatBirthdayLabel();

  if (countdown > 0) {
    elements.journeyChip.textContent = "生日倒计时";
    elements.journeyNumber.textContent = `${countdown} 天`;
    elements.journeyCopy.textContent = `距离 ${birthdayLabel} 还有 ${countdown} 天，我把所有小心思都藏进这个网页里。`;
  } else {
    elements.journeyChip.textContent = "生日快乐";
    elements.journeyNumber.textContent = "Today";
    elements.journeyCopy.textContent = `今天就是 ${birthdayLabel}，希望你会一直记得这一份被认真准备过的偏爱。`;
  }

  elements.journeyMeta.innerHTML = `
    <span class="pill">已经一起走过 ${togetherDays} 天</span>
    <span class="pill">已经送出 ${state.hugsSent} 个抱抱</span>
  `;
}

function renderMemoryGrid() {
  elements.memoryGrid.innerHTML = SITE_CONFIG.memories
    .map((memory, index) => {
      const classes = index === 0 ? "memory-card memory-card--large" : "memory-card";
      return `
        <article class="${classes}">
          <img src="${memory.image}" alt="${memory.title}" loading="lazy" />
          <span class="memory-card__label">${memory.title}</span>
        </article>
      `;
    })
    .join("");
}

function buildPrizeVisualContent(prize, options = {}) {
  const alt = options.alt ?? prize?.name ?? "礼物";
  const loading = options.loading ? ` loading="${options.loading}"` : "";

  if (prize?.image) {
    return `<img class="prize-media__image" src="${prize.image}" alt="${alt}"${loading} />`;
  }

  return `<span class="prize-media__fallback material-symbols-outlined filled" aria-hidden="true">${prize?.icon ?? "redeem"}</span>`;
}

function escapeHtmlAttribute(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return replacements[char];
  });
}

function buildPrizeVisualStyleAttr(prize) {
  if (!prize?.image) {
    return "";
  }

  const styles = [];

  if (prize.imageFit) {
    styles.push(`--prize-image-fit: ${prize.imageFit}`);
  }

  if (prize.imagePosition) {
    styles.push(`--prize-image-position: ${prize.imagePosition}`);
  }

  if (prize.imageScale) {
    styles.push(`--prize-image-scale: ${prize.imageScale}`);
  }

  if (prize.imageBackground) {
    styles.push(`--prize-image-background: ${prize.imageBackground}`);
  }

  return styles.length ? ` style="${styles.join("; ")}"` : "";
}

function buildPrizePreviewAttrs(prize, options = {}) {
  if (!prize?.image) {
    return "";
  }

  const title = prize.name ?? options.alt ?? "礼物";
  return [
    `data-preview-image="${escapeHtmlAttribute(prize.image)}"`,
    `data-preview-title="${escapeHtmlAttribute(title)}"`,
    `role="button"`,
    `tabindex="0"`,
    `aria-label="${escapeHtmlAttribute(`查看${title}原图`)}"`
  ].join(" ");
}

function buildPrizeVisualWrapper(prize, className, options = {}) {
  const toneClass = prize?.image ? " has-image" : prize?.tone ? ` tone-${prize.tone}` : "";
  const previewAttrs = buildPrizePreviewAttrs(prize, options);
  return `<span class="${className}${toneClass}"${buildPrizeVisualStyleAttr(prize)}${previewAttrs ? ` ${previewAttrs}` : ""}>${buildPrizeVisualContent(prize, options)}</span>`;
}

function applyPrizeVisualStyle(container, prize) {
  if (!container) {
    return;
  }

  const visualStyleMap = {
    "--prize-image-fit": prize?.imageFit,
    "--prize-image-position": prize?.imagePosition,
    "--prize-image-scale": prize?.imageScale,
    "--prize-image-background": prize?.imageBackground
  };

  Object.entries(visualStyleMap).forEach(([property, value]) => {
    if (value === undefined || value === null || value === "") {
      container.style.removeProperty(property);
      return;
    }

    container.style.setProperty(property, String(value));
  });
}

function setPrizeVisual(container, prize, options = {}) {
  if (!container) {
    return;
  }

  container.classList.toggle("has-image", Boolean(prize?.image));
  applyPrizeVisualStyle(container, prize);
  updatePrizePreviewTrigger(container, prize, options);
  container.innerHTML = buildPrizeVisualContent(prize, options);
}

function updatePrizePreviewTrigger(container, prize, options = {}) {
  if (!container) {
    return;
  }

  if (!prize?.image) {
    delete container.dataset.previewImage;
    delete container.dataset.previewTitle;
    container.classList.remove("is-previewable");
    container.removeAttribute("role");
    container.removeAttribute("tabindex");
    container.removeAttribute("aria-label");
    return;
  }

  const title = prize.name ?? options.alt ?? "礼物";
  container.dataset.previewImage = prize.image;
  container.dataset.previewTitle = title;
  container.classList.add("is-previewable");
  container.setAttribute("role", "button");
  container.setAttribute("tabindex", "0");
  container.setAttribute("aria-label", `查看${title}原图`);
}

function renderGiftGrid() {
  const giftMarkup = SITE_CONFIG.prizes
    .map((prize) => {
      const wideClass = prize.featured ? " gift-item--wide" : "";
      return `
        <article class="gift-item${wideClass}" data-prize-id="${prize.id}">
          ${buildPrizeVisualWrapper(prize, "gift-item__icon prize-media", { alt: prize.name, loading: "lazy" })}
          <h4 class="gift-item__title">${prize.name}</h4>
          <p class="gift-item__subtitle">${prize.subtitle}</p>
        </article>
      `;
    })
    .join("");

  elements.giftGrid.innerHTML = giftMarkup;

  if (elements.giftModalGrid) {
    elements.giftModalGrid.innerHTML = giftMarkup;
  }
}

function renderGachaPanel(options = {}) {
  const highlightedPrizeId =
    options.highlightPrizeId ??
    (gachaState.phase === GACHA_PHASE.IDLE ? state.drawHistory[0]?.prizeId ?? null : null);

  if (typeof options.animateCoinsFrom === "number" && options.animateCoinsFrom !== state.gachaCoins) {
    animateCounter(elements.coinCount, options.animateCoinsFrom, state.gachaCoins);
  } else {
    elements.coinCount.textContent = state.gachaCoins;
  }

  renderDrawButtonState();
  renderRestoreButtonState();
  renderHistoryList();
  renderRevealStage();
  updateGachaStatus(options.statusText);
  highlightPrizeCard(highlightedPrizeId, { immediate: true });
}

function renderDrawButtonState() {
  let label = "抽一发";
  let icon = "casino";
  let machineLabel = "开始扭蛋";

  if (gachaState.phase === GACHA_PHASE.DRAWING) {
    label = "扭蛋掉落中";
    icon = "hourglass_top";
    machineLabel = "扭蛋中";
  } else if (gachaState.phase === GACHA_PHASE.CAPSULE_READY) {
    label = "点扭蛋打开";
    icon = "touch_app";
    machineLabel = "点开扭蛋";
  } else if (gachaState.phase === GACHA_PHASE.OPENING) {
    label = "正在打开";
    icon = "auto_awesome";
    machineLabel = "打开中";
  } else if (state.gachaCoins <= 0) {
    label = "先去签到攒币";
    icon = "calendar_month";
    machineLabel = "先去签到";
  }

  const isLocked = gachaState.phase !== GACHA_PHASE.IDLE || state.gachaCoins <= 0;
  const isBusy = gachaState.phase === GACHA_PHASE.DRAWING || gachaState.phase === GACHA_PHASE.OPENING;

  elements.drawButton.hidden = true;
  elements.drawButton.disabled = isLocked;
  elements.drawButton.classList.toggle("is-busy", isBusy);
  elements.drawButton.innerHTML = `
    <span class="material-symbols-outlined">${icon}</span>
    ${label}
  `;

  elements.machineKnob.disabled = isLocked;
  elements.machineKnob.classList.toggle("is-busy", isBusy);
  elements.machineKnob.classList.toggle("is-ready", gachaState.phase === GACHA_PHASE.CAPSULE_READY);
  elements.machineBadge.classList.toggle("is-busy", isBusy);
  elements.machineBadge.classList.toggle("is-ready", gachaState.phase === GACHA_PHASE.CAPSULE_READY);
  elements.machineBadge.textContent = machineLabel;
  elements.machineKnob.setAttribute("aria-label", machineLabel);
}

function renderRestoreButtonState() {
  const locked = gachaState.phase !== GACHA_PHASE.IDLE;
  elements.restoreGachaButton.disabled = locked;
  elements.restoreGachaButton.textContent = locked ? "扭蛋进行中" : "恢复次数";
}

function renderRevealStage() {
  const isVisible =
    gachaState.phase === GACHA_PHASE.CAPSULE_READY || gachaState.phase === GACHA_PHASE.OPENING;
  const isReady = gachaState.phase === GACHA_PHASE.CAPSULE_READY;
  const isOpening = gachaState.phase === GACHA_PHASE.OPENING;

  elements.machineStage.classList.toggle("is-visible", isVisible);
  elements.machineStage.classList.toggle("is-ready", isReady);
  elements.machineStage.classList.toggle("is-opening", isOpening);
  elements.revealCapsule.disabled = !isReady;

  if (!gachaState.pendingPrize) {
    elements.revealCapsule.dataset.tone = "pink";
    setPrizeVisual(elements.revealPrizeIcon, null, { alt: "礼物" });
    elements.revealCapsule.setAttribute("aria-label", "点一下打开扭蛋");
    elements.revealTitle.textContent = "点一下打开扭蛋";
    elements.revealDesc.hidden = true;
    elements.revealDesc.textContent = "";
    elements.revealTip.textContent = "点一下打开扭蛋";
    return;
  }

  elements.revealCapsule.dataset.tone = gachaState.pendingTone;
  setPrizeVisual(elements.revealPrizeIcon, null, { alt: "礼物" });
  elements.revealCapsule.setAttribute("aria-label", "点一下打开扭蛋");
  elements.revealTitle.textContent = isOpening ? "正在打开扭蛋" : "点一下打开扭蛋";
  elements.revealDesc.hidden = true;
  elements.revealDesc.textContent = "";
  elements.revealTip.textContent = isOpening ? "惊喜马上揭晓..." : "点一下打开扭蛋";
}

function renderHistoryList() {
  const previewMarkup = buildHistoryListMarkup(state.drawHistory.slice(0, 4));
  const modalMarkup = buildHistoryListMarkup(state.drawHistory);

  if (elements.historyList) {
    elements.historyList.innerHTML = previewMarkup;
  }

  if (elements.recordModalList) {
    elements.recordModalList.innerHTML = modalMarkup;
  }

  return;

  if (!state.drawHistory.length) {
    elements.historyList.innerHTML = `
      <div class="empty-state">
        第一份惊喜还没有被抽出来。<br />
        先去签到攒扭蛋币，再回来抽一发吧。
      </div>
    `;
    return;
  }

  elements.historyList.innerHTML = state.drawHistory
    .slice(0, 4)
    .map((record) => {
      const prize = getPrizeById(record.prizeId);
      return `
        <article class="history-item">
          ${buildPrizeVisualWrapper(prize, "history-item__icon prize-media", { alt: prize.name, loading: "lazy" })}
          <div>
            <p class="history-item__title">${prize.name}</p>
            <p class="history-item__desc">${prize.subtitle}</p>
            <p class="history-item__time">${formatDateTime(record.drawnAt)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildHistoryListMarkup(records) {
  if (!records.length) {
    return `
      <div class="empty-state">
        绗竴浠芥儕鍠滆繕娌℃湁琚娊鍑烘潵銆?br />
        鍏堝幓绛惧埌鏀掓壄铔嬪竵锛屽啀鍥炴潵鎶戒竴鍙戝惂銆?
      </div>
    `;
  }

  return records
    .map((record) => {
      const prize = getPrizeById(record.prizeId);
      return `
        <article class="history-item">
          ${buildPrizeVisualWrapper(prize, "history-item__icon prize-media", { alt: prize.name, loading: "lazy" })}
          <div>
            <p class="history-item__title">${prize.name}</p>
            <p class="history-item__desc">${prize.subtitle}</p>
            <p class="history-item__time">${formatDateTime(record.drawnAt)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildHistoryListMarkup(records) {
  if (!records.length) {
    return `
      <div class="empty-state">
        ${GACHA_HISTORY_COPY.emptyTitle}<br />
        ${GACHA_HISTORY_COPY.emptyHint}
      </div>
    `;
  }

  return records
    .map((record) => {
      const prize = getPrizeById(record.prizeId);
      return `
        <article class="history-item">
          <div class="history-item__main">
            ${buildPrizeVisualWrapper(prize, "history-item__icon prize-media", { alt: prize.name, loading: "lazy" })}
            <p class="history-item__title">${prize.name}</p>
          </div>
          <time class="history-item__time" datetime="${record.drawnAt}">${formatDateTime(record.drawnAt)}</time>
        </article>
      `;
    })
    .join("");
}

function renderPocketList() {
  const latestDraws = state.drawHistory.slice(0, 3);

  if (!latestDraws.length) {
    elements.pocketList.innerHTML = `
      <div class="empty-state">
        礼物口袋还是空空的，等你抽到第一份惊喜之后，<br />
        它就会安安静静地躺在这里。
      </div>
    `;
    return;
  }

  elements.pocketList.innerHTML = latestDraws
    .map((record) => {
      const prize = getPrizeById(record.prizeId);
      return `
        <article class="pocket-item">
          ${buildPrizeVisualWrapper(prize, "pocket-item__icon prize-media", { alt: prize.name, loading: "lazy" })}
          <div>
            <p class="pocket-item__title">${prize.name}</p>
            <p class="pocket-item__desc">${prize.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDailyPanel() {
  const streak = getCurrentStreak();
  const monthInfo = getMonthProgress(state.calendarMonth);

  elements.streakNumber.textContent = streak;
  elements.monthProgressText.textContent = `${monthInfo.checked} / ${monthInfo.total}`;
  elements.monthProgressBar.style.width = `${Math.max((monthInfo.checked / monthInfo.total) * 100, 4)}%`;
  elements.calendarTitle.textContent = monthInfo.label;
  renderCalendarGrid(state.calendarMonth);
  updateCheckInButton();
}

function renderCalendarGrid(monthKey) {
  const viewDate = parseMonthKey(monthKey);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDay.getDay();
  const previousMonthDays = new Date(year, month, 0).getDate();
  const todayKey = formatDateKey(new Date());
  const cells = [];

  for (let index = startWeekday - 1; index >= 0; index -= 1) {
    cells.push({
      label: previousMonthDays - index,
      key: null,
      classes: ["day-cell", "day-cell--outside", "day-cell--view-only"]
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const dateKey = formatDateKey(date);
    const classes = ["day-cell"];

    if (state.checkIns.includes(dateKey)) {
      classes.push("day-cell--checked");
    } else if (dateKey === todayKey) {
      classes.push("day-cell--today");
    } else if (date > startOfDay(new Date())) {
      classes.push("day-cell--future", "day-cell--view-only");
    } else {
      classes.push("day-cell--view-only");
    }

    cells.push({ label: day, key: dateKey, classes });
  }

  while (cells.length % 7 !== 0) {
    cells.push({
      label: cells.length - (startWeekday + daysInMonth) + 1,
      key: null,
      classes: ["day-cell", "day-cell--outside", "day-cell--view-only"]
    });
  }

  elements.calendarGrid.innerHTML = cells
    .map(
      (cell) =>
        `<button type="button" class="${cell.classes.join(" ")}" ${cell.key ? `data-date="${cell.key}"` : "disabled"}><span>${cell.label}</span></button>`
    )
    .join("");
}

function updateCheckInButton() {
  const today = new Date();
  const currentMonth = monthString(today);
  const checkedInToday = state.checkIns.includes(formatDateKey(today));

  if (state.calendarMonth !== currentMonth) {
    elements.checkinButton.disabled = true;
    elements.checkinButton.innerHTML = `
      <span class="material-symbols-outlined">visibility</span>
      当前是历史月份，仅查看记录
    `;
    return;
  }

  if (checkedInToday) {
    elements.checkinButton.disabled = true;
    elements.checkinButton.innerHTML = `
      <span class="material-symbols-outlined filled">favorite</span>
      今天已经签到啦
    `;
    return;
  }

  elements.checkinButton.disabled = false;
  elements.checkinButton.innerHTML = `
    <span class="material-symbols-outlined">calendar_month</span>
    今天也要签到
  `;
}

function renderRewardStats() {
  elements.loveNotesCount.textContent = state.loveNotes;
  elements.rewardCoinsCount.textContent = state.gachaCoins;
  elements.surpriseCount.textContent = state.drawHistory.length;
}

function switchView(view) {
  closeGiftModal(true);
  closeRecordModal(true);
  state.activeView = view;
  updateLocationHash(view);
  saveState();
  renderActiveView();

  if (view === "gacha") {
    initializeGachaPhysics(true);
    playGachaEntrance(true);
    return;
  }

  stopTimeline(gachaMotion?.introTl);
  stopTimeline(gachaMotion?.drawTl);
  stopTimeline(gachaMotion?.openTl);
  gachaMotion?.idleTl?.pause();
}

async function handleDraw() {
  closeGiftModal(true);
  closeRecordModal(true);

  if (gachaState.phase !== GACHA_PHASE.IDLE) {
    if (gachaState.phase === GACHA_PHASE.CAPSULE_READY) {
      showToast("扭蛋已经掉出来啦，先点开看看。");
    }
    return;
  }

  if (state.gachaCoins <= 0) {
    showToast("扭蛋币不够啦，先去签到攒一点再来。");
    switchView("daily");
    return;
  }

  const prize = pickPrize();
  const previousCoins = state.gachaCoins;

  gachaState.phase = GACHA_PHASE.DRAWING;
  gachaState.pendingPrize = prize;
  gachaState.pendingTone = pickCapsuleToneForPrize(prize);
  gachaState.previousCoins = previousCoins;
  resolveCapsuleOpen = null;

  playGachaSound("draw");
  prepareRevealCapsule(prize, gachaState.pendingTone);
  renderGachaPanel();
  updateGachaStatus("机器找礼物中...");

  await playDrawSequence(prize);

  gachaState.phase = GACHA_PHASE.CAPSULE_READY;
  renderGachaPanel();

  await waitForCapsuleOpen();

  finishDraw(prize, previousCoins);
}

async function handleRevealCapsule() {
  if (gachaState.phase !== GACHA_PHASE.CAPSULE_READY || !gachaState.pendingPrize) {
    return;
  }

  gachaState.phase = GACHA_PHASE.OPENING;
  renderGachaPanel();

  playGachaSound("reveal");
  await playCapsuleOpenSequence(gachaState.pendingPrize);

  if (typeof resolveCapsuleOpen === "function") {
    resolveCapsuleOpen();
    resolveCapsuleOpen = null;
  }
}

function waitForCapsuleOpen() {
  return new Promise((resolve) => {
    resolveCapsuleOpen = resolve;
  });
}

function handleRestoreGachaCoins() {
  if (gachaState.phase !== GACHA_PHASE.IDLE) {
    showToast("先等这次扭蛋流程结束，再恢复次数。");
    return;
  }

  const previousCoins = state.gachaCoins;
  state.gachaCoins = DEFAULT_GACHA_COINS;
  saveState();

  renderGachaPanel({
    animateCoinsFrom: previousCoins,
    statusText: "扭蛋次数已恢复，继续抽吧。"
  });
  renderRewardStats();
  showToast(`已恢复到 ${DEFAULT_GACHA_COINS} 次扭蛋机会。`);
}

function finishDraw(prize, previousCoins) {
  resolveCapsuleOpen = null;
  state.gachaCoins = Math.max(0, state.gachaCoins - 1);
  state.drawHistory.unshift({
    prizeId: prize.id,
    drawnAt: new Date().toISOString()
  });
  saveState();

  gachaState = buildGachaState();
  resetGachaTransforms();
  initializeGachaPhysics(true);
  renderGachaPanel({
    animateCoinsFrom: previousCoins,
    highlightPrizeId: prize.id,
    statusText: "惊喜已经打开啦。"
  });
  renderPocketList();
  renderRewardStats();
  showPrizeModal(prize);
}

function handleCheckIn() {
  const todayKey = formatDateKey(new Date());

  if (state.checkIns.includes(todayKey)) {
    showToast("今天已经签过到了，明天再来继续收礼物吧。");
    return;
  }

  state.checkIns.push(todayKey);
  state.checkIns = unique(state.checkIns).sort();
  state.loveNotes += 1;
  state.gachaCoins += 1;
  saveState();

  renderJourneyCard();
  renderDailyPanel();
  renderGachaPanel();
  renderRewardStats();
  burstHearts(elements.checkinButton, 10);
  showToast("签到成功，收下 1 张 Love Note 和 1 枚扭蛋币。");
}

function changeMonth(direction) {
  const current = parseMonthKey(state.calendarMonth);
  current.setMonth(current.getMonth() + direction);
  state.calendarMonth = monthString(current);
  saveState();
  renderDailyPanel();
}

function playGachaEntrance(force = false) {
  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    return;
  }

  initializeGachaPhysics(true);

  if (gachaMotion.introTl?.isActive()) {
    return;
  }

  if (gachaMotion.hasEntered && !force) {
    gachaMotion.idleTl?.play();
    return;
  }

  gachaMotion.hasEntered = true;
  gachaMotion.idleTl?.pause(0);

  const quickbarTargets = elements.quickbarItems.length ? elements.quickbarItems : [elements.coinStrip];

  resetGachaTransforms();

  gachaMotion.introTl = GSAP.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      gachaMotion.idleTl?.play();
    }
  });

  gachaMotion.introTl
    .fromTo(elements.gachaIntro, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.42 }, 0)
    .fromTo(
      elements.machine,
      { y: 26, scale: 0.92, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.62, ease: "back.out(1.35)" },
      0.06
    )
    .fromTo(
      [quickbarTargets, elements.gachaStatus].flat(),
      { y: 16, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.34, stagger: 0.06 },
      0.18
    )
    ;
}

function playMatterDrawSequence(prize) {
  const drawAccentProfile = buildDrawAccentProfile();
  const revealProfile = buildRevealCapsuleDropProfile();

  beginGachaPhysicsDraw(gachaState.pendingTone);
  syncGachaPhysicsToDom(true);

  return new Promise((resolve) => {
    gachaMotion.drawTl = GSAP.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gachaMotion.idleTl?.play(0);
        resolve();
      }
    });

    gachaMotion.drawTl
      .call(() => {
        elements.machineStage.classList.add("is-visible");
        elements.machineStage.classList.remove("is-ready", "is-opening");
      }, null, 0)
      .set(elements.machineStageGlow, { scale: 0.86, autoAlpha: 0 })
      .set(elements.revealCapsule, { autoAlpha: 0, y: -18, scale: 0.46, rotation: -18 })
      .set([elements.revealShellTop, elements.revealShellBottom, elements.revealSeam], {
        x: 0,
        y: 0,
        rotation: 0,
        autoAlpha: 1
      })
      .set(elements.revealCapsuleCore, {
        y: 10,
        scale: 0.3,
        autoAlpha: 0
      })
      .to(
        elements.machineKnob,
        {
          rotation: `+=${drawAccentProfile.knobRotation}`,
          duration: drawAccentProfile.knobDuration,
          ease: "power4.out",
          transformOrigin: "50% 50%"
        },
        0.06
      )
      .to(
        elements.machineRibbon,
        {
          y: drawAccentProfile.ribbonLift,
          rotation: drawAccentProfile.ribbonRotation,
          duration: 0.18,
          repeat: drawAccentProfile.ribbonRepeats,
          yoyo: true,
          ease: "sine.inOut"
        },
        0.12
      )
      .to(
        elements.machineHalo,
        {
          scale: drawAccentProfile.haloScale,
          autoAlpha: 0.95,
          duration: 0.28,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut"
        },
        0.14
      )
      .to(
        elements.machineStars,
        {
          scale: () => randomBetween(1.22, 1.48),
          autoAlpha: 1,
          x: () => randomBetween(-drawAccentProfile.starDrift, drawAccentProfile.starDrift),
          y: () => randomBetween(-drawAccentProfile.starDrift, drawAccentProfile.starDrift),
          rotation: () => randomBetween(-32, 32),
          duration: 0.22,
          stagger: { each: 0.03, from: "random" }
        },
        0.16
      )
      .to(elements.gachaStatus, { autoAlpha: 0.18, duration: 0.12 }, 0)
      .call(() => {
        updateGachaStatus("鎵泲姝ｅ湪鎺夊嚭鏉?..");
      }, null, 0.14)
      .to(elements.gachaStatus, { autoAlpha: 1, duration: 0.18 }, 0.16)
      .add(() => burstSparkles(elements.machineSlot, 16), 1.02)
      .to(
        elements.machineStageGlow,
        {
          scale: 1.08,
          autoAlpha: 1,
          duration: 0.34,
          ease: "sine.out"
        },
        1
      )
      .fromTo(
        elements.revealCapsule,
        {
          autoAlpha: 0,
          scale: 0.42,
          y: revealProfile.startY,
          rotation: revealProfile.startRotation
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotation: revealProfile.midRotation,
          duration: 0.3,
          ease: "back.out(1.9)"
        },
        1.04
      )
      .to(elements.revealCapsule, { y: revealProfile.bounceY, duration: 0.32, ease: "bounce.out" }, 1.18)
      .to(
        elements.revealCapsule,
        {
          y: revealProfile.settleY,
          rotation: revealProfile.settleRotation,
          duration: 0.2,
          ease: "sine.out"
        },
        1.5
      )
      .to(elements.revealCapsule, { y: 0, rotation: 0, duration: 0.24, ease: "sine.inOut" }, 1.72)
      .call(() => {
        updateGachaStatus("鎵泲鎺夊嚭鏉ュ暒锛岀偣寮€鐪嬬湅銆?");
      }, null, 1.34);
  });
}

function playDrawSequence(prize) {
  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    elements.machineStage.classList.add("is-visible");
    elements.machineStageGlow.style.opacity = "1";
    elements.revealCapsule.style.opacity = "1";
    elements.revealCapsule.style.transform = "translateX(-50%)";
    burstSparkles(elements.machineSlot, 16);
    return Promise.resolve();
  }

  stopTimeline(gachaMotion.introTl);
  stopTimeline(gachaMotion.drawTl);
  stopTimeline(gachaMotion.openTl);
  gachaMotion.idleTl?.pause(0);
  resetGachaTransforms();

  if (initializeGachaPhysics()) {
    return playMatterDrawSequence(prize);
  }

  const drawAccentProfile = buildDrawAccentProfile();
  const burstProfiles = buildBurstCapsuleProfiles();
  const revealProfile = buildRevealCapsuleDropProfile();

  return new Promise((resolve) => {
    gachaMotion.drawTl = GSAP.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gachaMotion.idleTl?.play(0);
        resolve();
      }
    });

    gachaMotion.drawTl
      .call(() => {
        elements.machineStage.classList.add("is-visible");
        elements.machineStage.classList.remove("is-ready", "is-opening");
      }, null, 0)
      .set(elements.machineStageGlow, { scale: 0.86, autoAlpha: 0 })
      .set(elements.revealCapsule, { autoAlpha: 0, y: -18, scale: 0.46, rotation: -18 })
      .set([elements.revealShellTop, elements.revealShellBottom, elements.revealSeam], {
        x: 0,
        y: 0,
        rotation: 0,
        autoAlpha: 1
      })
      .set(elements.revealCapsuleCore, {
        y: 10,
        scale: 0.3,
        autoAlpha: 0
      })
      .to(
        elements.machineKnob,
        {
          rotation: `+=${drawAccentProfile.knobRotation}`,
          duration: drawAccentProfile.knobDuration,
          ease: "power4.out",
          transformOrigin: "50% 50%"
        },
        0.06
      )
      .to(
        elements.machineRibbon,
        {
          y: drawAccentProfile.ribbonLift,
          rotation: drawAccentProfile.ribbonRotation,
          duration: 0.18,
          repeat: drawAccentProfile.ribbonRepeats,
          yoyo: true,
          ease: "sine.inOut"
        },
        0.12
      )
      .to(
        elements.machineHalo,
        {
          scale: drawAccentProfile.haloScale,
          autoAlpha: 0.95,
          duration: 0.28,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut"
        },
        0.14
      )
      .to(
        elements.machineStars,
        {
          scale: () => randomBetween(1.22, 1.48),
          autoAlpha: 1,
          x: () => randomBetween(-drawAccentProfile.starDrift, drawAccentProfile.starDrift),
          y: () => randomBetween(-drawAccentProfile.starDrift, drawAccentProfile.starDrift),
          rotation: () => randomBetween(-32, 32),
          duration: 0.22,
          stagger: { each: 0.03, from: "random" }
        },
        0.16
      )
      .to(
        elements.machineCapsules,
        {
          x: (index) => burstProfiles[index].surgeX,
          y: (index) => burstProfiles[index].surgeY,
          rotation: (index) => burstProfiles[index].surgeRotation,
          scale: (index) => burstProfiles[index].surgeScale,
          duration: 0.2,
          ease: "power4.out",
          stagger: { each: 0.012, from: "random" }
        },
        0.08
      )
      .to(
        elements.machineCapsules,
        {
          x: (index) => burstProfiles[index].scrambleX,
          y: (index) => burstProfiles[index].scrambleY,
          rotation: (index) => burstProfiles[index].scrambleRotation,
          scale: (index) => burstProfiles[index].scrambleScale,
          duration: 0.18,
          ease: "sine.inOut",
          stagger: { each: 0.01, from: "edges" }
        },
        0.26
      )
      .to(
        elements.machineCapsules,
        {
          x: (index) => burstProfiles[index].whirlX,
          y: (index) => burstProfiles[index].whirlY,
          rotation: (index) => burstProfiles[index].whirlRotation,
          scale: (index) => burstProfiles[index].whirlScale,
          duration: 0.16,
          ease: "power1.inOut",
          stagger: { each: 0.01, from: "center" }
        },
        0.42
      )
      .to(
        elements.machineCapsules,
        {
          x: (index) => burstProfiles[index].reboundX,
          y: (index) => burstProfiles[index].reboundY,
          rotation: (index) => burstProfiles[index].reboundRotation,
          scale: (index) => burstProfiles[index].reboundScale,
          duration: 0.2,
          ease: "back.out(1.28)",
          stagger: { each: 0.012, from: "random" }
        },
        0.58
      )
      .to(
        elements.machineCapsules,
        {
          x: (index) => burstProfiles[index].settleX,
          y: (index) => burstProfiles[index].settleY,
          rotation: (index) => burstProfiles[index].settleRotation,
          scale: (index) => burstProfiles[index].settleScale,
          duration: 0.18,
          ease: "power2.inOut",
          stagger: { each: 0.01, from: "edges" }
        },
        0.78
      )
      .to(
        elements.machineCapsules,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.24,
          ease: "sine.out",
          stagger: { each: 0.008, from: "center" }
        },
        0.98
      )
      .to(elements.gachaStatus, { autoAlpha: 0.18, duration: 0.12 }, 0)
      .call(() => {
        updateGachaStatus("扭蛋正在掉出来...");
      }, null, 0.14)
      .to(elements.gachaStatus, { autoAlpha: 1, duration: 0.18 }, 0.16)
      .add(() => burstSparkles(elements.machineSlot, 16), 1.02)
      .to(
        elements.machineStageGlow,
        {
          scale: 1.08,
          autoAlpha: 1,
          duration: 0.34,
          ease: "sine.out"
        },
        1
      )
      .fromTo(
        elements.revealCapsule,
        {
          autoAlpha: 0,
          scale: 0.42,
          y: revealProfile.startY,
          rotation: revealProfile.startRotation
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotation: revealProfile.midRotation,
          duration: 0.3,
          ease: "back.out(1.9)"
        },
        1.04
      )
      .to(elements.revealCapsule, { y: revealProfile.bounceY, duration: 0.32, ease: "bounce.out" }, 1.18)
      .to(
        elements.revealCapsule,
        {
          y: revealProfile.settleY,
          rotation: revealProfile.settleRotation,
          duration: 0.2,
          ease: "sine.out"
        },
        1.5
      )
      .to(elements.revealCapsule, { y: 0, rotation: 0, duration: 0.24, ease: "sine.inOut" }, 1.72)
      .call(() => {
        updateGachaStatus("扭蛋掉出来啦，点开看。");
      }, null, 1.34);
  });
}

function playCapsuleOpenSequence(prize) {
  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    elements.revealShellTop.style.transform = "translateX(-50%) translateY(-24px) rotate(-18deg)";
    elements.revealShellBottom.style.transform = "translateX(-50%) translateY(14px) rotate(10deg)";
    elements.revealSeam.style.opacity = "0";
    elements.revealCapsuleCore.style.opacity = "1";
    burstSparkles(elements.revealCapsule, 18);
    burstHearts(elements.revealCapsule, 8);
    return Promise.resolve();
  }

  stopTimeline(gachaMotion.openTl);
  gachaMotion.idleTl?.pause(0);

  return new Promise((resolve) => {
    gachaMotion.openTl = GSAP.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gachaMotion.idleTl?.play(0);
        resolve();
      }
    });

    gachaMotion.openTl
      .to(elements.revealCapsule, { scale: 1.04, duration: 0.12, ease: "power1.out" }, 0)
      .to(elements.revealCapsule, { scale: 1, duration: 0.18, ease: "back.out(2.2)" }, 0.12)
      .to(elements.machineStageGlow, { scale: 1.2, autoAlpha: 1, duration: 0.34, ease: "sine.out" }, 0)
      .to(elements.revealSeam, { autoAlpha: 0, duration: 0.12 }, 0.14)
      .to(
        elements.revealShellTop,
        { x: -10, y: -34, rotation: -18, duration: 0.4, ease: "back.out(1.32)" },
        0.18
      )
      .to(
        elements.revealShellBottom,
        { x: 10, y: 16, rotation: 10, duration: 0.36, ease: "back.out(1.2)" },
        0.18
      )
      .fromTo(
        elements.revealCapsuleCore,
        { autoAlpha: 0, scale: 0.36, y: 8 },
        { autoAlpha: 1, scale: 1, y: -18, duration: 0.42, ease: "elastic.out(1, 0.55)" },
        0.26
      )
      .fromTo(
        elements.revealPrizeIcon,
        { scale: 0.3, rotation: -18 },
        { scale: 1, rotation: 0, duration: 0.32, ease: "back.out(2.4)" },
        0.3
      )
      .call(() => {
        burstSparkles(elements.revealCapsule, 20);
        burstHearts(elements.revealCapsule, 8);
      }, null, 0.24);
  });
}

function getCapsuleMotionStrength(index, total) {
  if (total <= 1) {
    return 1 + randomBetween(0.08, 0.22);
  }

  const center = (total - 1) / 2;
  const distanceFromCenter = Math.abs(index - center) / center;
  return 0.88 + distanceFromCenter * 0.22 + randomBetween(0.08, 0.18);
}

function buildDrawAccentProfile() {
  const direction = Math.random() > 0.5 ? 1 : -1;

  return {
    knobRotation: randomBetween(320, 490),
    knobDuration: randomBetween(0.92, 1.08),
    ribbonLift: randomBetween(-5, -2),
    ribbonRotation: direction * randomBetween(4, 10),
    ribbonRepeats: Math.round(randomBetween(2, 4)),
    haloScale: randomBetween(1.18, 1.32),
    starDrift: randomBetween(10, 16)
  };
}

function buildBurstCapsuleProfiles() {
  const total = elements.machineCapsules.length;
  const sweepDirection = Math.random() > 0.5 ? 1 : -1;
  const vortexDirection = Math.random() > 0.5 ? 1 : -1;

  return elements.machineCapsules.map((_, index) => {
    const strength = getCapsuleMotionStrength(index, total);
    const laneBias = total <= 1 ? 0 : index / (total - 1) - 0.5;
    const primaryDrift =
      laneBias * randomBetween(38, 58) +
      sweepDirection * randomBetween(-14, 14) +
      randomBetween(-10, 10);
    const scrambleDrift = primaryDrift * randomBetween(0.42, 0.82) + randomBetween(-20, 20);
    const swirlDrift = -primaryDrift * randomBetween(0.32, 0.62) + vortexDirection * randomBetween(-18, 18);
    const reboundX = laneBias * randomBetween(10, 28) + randomBetween(-14, 14);
    const reboundY = randomBetween(-14, 12) * strength;
    const settleX = randomBetween(-9, 9);
    const settleY = randomBetween(-8, 8);

    return {
      surgeX: primaryDrift,
      surgeY: randomBetween(-30, 18) * strength,
      surgeRotation: randomBetween(-44, 44) + laneBias * 30,
      surgeScale: randomBetween(0.94, 1.16),
      scrambleX: scrambleDrift,
      scrambleY: randomBetween(-20, 22) * strength,
      scrambleRotation: vortexDirection * randomBetween(22, 60) + laneBias * 18,
      scrambleScale: randomBetween(0.9, 1.14),
      whirlX: swirlDrift,
      whirlY: randomBetween(-22, 20) * strength,
      whirlRotation: -vortexDirection * randomBetween(18, 46),
      whirlScale: randomBetween(0.96, 1.12),
      reboundX,
      reboundY,
      reboundRotation: randomBetween(-24, 24),
      reboundScale: randomBetween(0.97, 1.08),
      settleX,
      settleY,
      settleRotation: randomBetween(-12, 12),
      settleScale: randomBetween(0.98, 1.04)
    };
  });
}

function buildRevealCapsuleDropProfile() {
  const direction = Math.random() > 0.5 ? 1 : -1;

  return {
    startY: randomBetween(-34, -20),
    startRotation: -direction * randomBetween(18, 30),
    midRotation: direction * randomBetween(4, 12),
    bounceY: randomBetween(18, 28),
    settleY: randomBetween(6, 12),
    settleRotation: -direction * randomBetween(5, 10)
  };
}

function buildIdleCapsuleProfiles() {
  const total = elements.machineCapsules.length;
  const sweepDirection = Math.random() > 0.5 ? 1 : -1;

  return elements.machineCapsules.map((_, index) => {
    const strength = getCapsuleMotionStrength(index, total);
    const slotDirection = index % 2 === 0 ? -1 : 1;
    const crossDirection = Math.random() > 0.5 ? 1 : -1;

    return {
      poseA: {
        x: (slotDirection * randomBetween(5, 12) + sweepDirection * randomBetween(2, 8)) * strength,
        y: randomBetween(-16, 8) * strength,
        rotation: (slotDirection + sweepDirection * 0.35) * randomBetween(8, 18),
        scale: randomBetween(0.96, 1.08)
      },
      poseB: {
        x: (crossDirection * randomBetween(8, 18) - sweepDirection * randomBetween(2, 8)) * strength,
        y: randomBetween(-6, 16) * strength,
        rotation: crossDirection * randomBetween(10, 24),
        scale: randomBetween(0.94, 1.1)
      },
      settle: {
        x: randomBetween(-4, 4),
        y: randomBetween(-3, 3),
        rotation: randomBetween(-8, 8),
        scale: randomBetween(0.98, 1.03)
      }
    };
  });
}

function createIdleTimeline() {
  const tl = GSAP.timeline({
    paused: true,
    repeat: -1,
    repeatRefresh: true,
    defaults: { ease: "sine.inOut" }
  });

  tl.to(
      elements.machineHalo,
      {
        scale: () => randomBetween(1.03, 1.1),
        autoAlpha: () => randomBetween(0.78, 0.92),
        duration: 1.08
      },
      0
    )
    .to(
      elements.machineBadge,
      {
        y: () => randomBetween(-2, 1),
        scale: () => randomBetween(0.99, 1.02),
        duration: 1
      },
      0
    )
    .to(
      elements.machineRibbon,
      {
        y: () => randomBetween(-2, 2),
        rotation: () => randomBetween(-4, 4),
        duration: 1.02
      },
      0
    )
    .to(
      elements.machineStars,
      {
        x: () => randomBetween(-8, 8),
        y: () => randomBetween(-10, 10),
        rotation: () => randomBetween(-18, 18),
        scale: () => randomBetween(0.98, 1.12),
        autoAlpha: () => randomBetween(0.38, 0.68),
        duration: 0.96,
        stagger: { each: 0.04, from: "random" }
      },
      0
    )
    .to(
      elements.machineHalo,
      {
        scale: 1,
        autoAlpha: 0.8,
        duration: 0.82,
        ease: "sine.out"
      },
      1.08
    )
    .to(
      elements.machineBadge,
      {
        y: 0,
        scale: 1,
        duration: 0.78,
        ease: "sine.out"
      },
      1.08
    )
    .to(
      [elements.machineKnob, elements.machineRibbon],
      {
        rotation: 0,
        y: 0,
        duration: 0.84,
        ease: "sine.out"
      },
      1.08
    )
    .to(
      elements.machineStars,
      {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        autoAlpha: 0.5,
        duration: 0.72,
        ease: "sine.out",
        stagger: { each: 0.02, from: "center" }
      },
      1.08
    );

  return tl;
}

function resetGachaTransforms() {
  if (!GSAP) {
    elements.machineStage.classList.remove("is-visible", "is-ready", "is-opening");
    elements.machineStageGlow.style.opacity = "";
    elements.revealCapsule.style.opacity = "";
    elements.revealCapsule.style.transform = "";
    elements.revealShellTop.style.transform = "";
    elements.revealShellBottom.style.transform = "";
    elements.revealSeam.style.opacity = "";
    elements.revealCapsuleCore.style.opacity = "";
    return;
  }

  GSAP.set(
    [
      elements.machine,
      elements.machineDome,
      elements.machineBody,
      elements.machineRibbon,
      elements.machineKnob,
      elements.drawButton,
      elements.coinStrip,
      elements.gachaIntro,
      elements.gachaStatus,
      elements.giftLaunch,
      elements.recordLaunch,
      elements.revealShellTop,
      elements.revealShellBottom,
      elements.revealSeam,
      elements.revealCapsuleCore
    ],
    {
      clearProps: "transform,opacity"
    }
  );

  GSAP.set(elements.machineHalo, {
    scale: 1,
    autoAlpha: 0.68
  });

  GSAP.set(elements.machineStars, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    autoAlpha: 0.64
  });

  GSAP.set(elements.machineCapsules, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1
  });

  elements.machineStage.classList.remove("is-visible", "is-ready", "is-opening");

  GSAP.set(elements.machineStageGlow, {
    scale: 1,
    autoAlpha: 0
  });

  GSAP.set(elements.revealCapsule, {
    y: 12,
    scale: 0.42,
    rotation: -14,
    autoAlpha: 0
  });

  GSAP.set(elements.revealShellTop, {
    x: 0,
    y: 0,
    rotation: 0,
    autoAlpha: 1
  });

  GSAP.set(elements.revealShellBottom, {
    x: 0,
    y: 0,
    rotation: 0,
    autoAlpha: 1
  });

  GSAP.set(elements.revealSeam, {
    autoAlpha: 1
  });

  GSAP.set(elements.revealCapsuleCore, {
    y: 10,
    scale: 0.28,
    autoAlpha: 0
  });

  if (gachaPhysics) {
    syncGachaPhysicsToDom(true);
  }
}

function openGiftModal() {
  closeRecordModal(true);
  closeModal();
  highlightPrizeCard(state.drawHistory[0]?.prizeId ?? null, { immediate: true });
  elements.giftModal.hidden = false;

  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    return;
  }

  stopTimeline(gachaMotion.giftModalTl);
  gachaMotion.giftModalTl = GSAP.timeline({ defaults: { ease: "power3.out" } });
  gachaMotion.giftModalTl
    .set(elements.giftModalBackdrop, { autoAlpha: 0 })
    .set(elements.giftModalDialog, { autoAlpha: 0, y: 30, scale: 0.96 })
    .to(elements.giftModalBackdrop, { autoAlpha: 1, duration: 0.2 }, 0)
    .to(elements.giftModalDialog, { autoAlpha: 1, y: 0, scale: 1, duration: 0.36 }, 0.04);
}

function closeGiftModal(immediate = false) {
  if (elements.giftModal.hidden) {
    return;
  }

  if (immediate || !GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    elements.giftModal.hidden = true;
    return;
  }

  stopTimeline(gachaMotion.giftModalTl);
  gachaMotion.giftModalTl = GSAP.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => {
      elements.giftModal.hidden = true;
    }
  });

  gachaMotion.giftModalTl
    .to(elements.giftModalDialog, { autoAlpha: 0, y: 20, scale: 0.96, duration: 0.18 }, 0)
    .to(elements.giftModalBackdrop, { autoAlpha: 0, duration: 0.18 }, 0);
}

function openRecordModal() {
  closeGiftModal(true);
  closeModal();
  elements.recordModal.hidden = false;

  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    return;
  }

  stopTimeline(gachaMotion.recordModalTl);
  gachaMotion.recordModalTl = GSAP.timeline({ defaults: { ease: "power3.out" } });
  gachaMotion.recordModalTl
    .set(elements.recordModalBackdrop, { autoAlpha: 0 })
    .set(elements.recordModalDialog, { autoAlpha: 0, y: 30, scale: 0.96 })
    .to(elements.recordModalBackdrop, { autoAlpha: 1, duration: 0.2 }, 0)
    .to(elements.recordModalDialog, { autoAlpha: 1, y: 0, scale: 1, duration: 0.36 }, 0.04);
}

function closeRecordModal(immediate = false) {
  if (!elements.recordModal || elements.recordModal.hidden) {
    return;
  }

  if (immediate || !GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    elements.recordModal.hidden = true;
    return;
  }

  stopTimeline(gachaMotion.recordModalTl);
  gachaMotion.recordModalTl = GSAP.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => {
      elements.recordModal.hidden = true;
    }
  });

  gachaMotion.recordModalTl
    .to(elements.recordModalDialog, { autoAlpha: 0, y: 20, scale: 0.96, duration: 0.18 }, 0)
    .to(elements.recordModalBackdrop, { autoAlpha: 0, duration: 0.18 }, 0);
}

function showPrizeModal(prize) {
  closeGiftModal(true);
  closeRecordModal(true);
  setPrizeVisual(elements.modalIcon, prize, { alt: prize.name });
  elements.modalTitle.textContent = `抽到了 ${prize.name}`;
  elements.modalCopy.textContent = prize.description;
  elements.modal.hidden = false;

  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    return;
  }

  stopTimeline(gachaMotion.modalTl);
  gachaMotion.modalTl = GSAP.timeline({ defaults: { ease: "power3.out" } });
  gachaMotion.modalTl
    .set(elements.modalBackdrop, { autoAlpha: 0 })
    .set(elements.modalDialog, { autoAlpha: 0, y: 20, scale: 0.92 })
    .to(elements.modalBackdrop, { autoAlpha: 1, duration: 0.2 }, 0)
    .to(elements.modalDialog, { autoAlpha: 1, y: 0, scale: 1, duration: 0.42, ease: "back.out(1.35)" }, 0.04);
}

function closeModal() {
  if (elements.modal.hidden) {
    return;
  }

  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    elements.modal.hidden = true;
    return;
  }

  stopTimeline(gachaMotion.modalTl);
  gachaMotion.modalTl = GSAP.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => {
      elements.modal.hidden = true;
    }
  });

  gachaMotion.modalTl
    .to(elements.modalDialog, { autoAlpha: 0, y: 16, scale: 0.94, duration: 0.18 }, 0)
    .to(elements.modalBackdrop, { autoAlpha: 0, duration: 0.18 }, 0);
}

function getPrizeImagePreviewTrigger(target) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest("[data-preview-image]");
}

function handlePrizeImagePreviewClick(event) {
  const trigger = getPrizeImagePreviewTrigger(event.target);

  if (!trigger) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  openImagePreviewFromTrigger(trigger);
}

function openImagePreviewFromTrigger(trigger) {
  openImagePreview(trigger.dataset.previewImage, trigger.dataset.previewTitle);
}

function openImagePreview(src, title = "礼物原图") {
  if (!src || !elements.imagePreviewModal || !elements.imagePreviewImage) {
    return;
  }

  const previewTitle = title || "礼物原图";
  elements.imagePreviewImage.src = src;
  elements.imagePreviewImage.alt = previewTitle;
  elements.imagePreviewTitle.textContent = previewTitle;
  elements.imagePreviewModal.hidden = false;
  elements.imagePreviewClose?.focus({ preventScroll: true });
}

function closeImagePreview() {
  if (!elements.imagePreviewModal || elements.imagePreviewModal.hidden) {
    return;
  }

  elements.imagePreviewModal.hidden = true;
  elements.imagePreviewImage.removeAttribute("src");
  elements.imagePreviewImage.alt = "";
  elements.imagePreviewTitle.textContent = "";
}

function updateGachaStatus(text) {
  if (text) {
    elements.gachaStatus.textContent = text;
    return;
  }

  if (gachaState.phase === GACHA_PHASE.DRAWING) {
    elements.gachaStatus.textContent = "机器找礼物中...";
    return;
  }

  if (gachaState.phase === GACHA_PHASE.CAPSULE_READY) {
    elements.gachaStatus.textContent = "扭蛋掉出来啦，点开看。";
    return;
  }

  if (gachaState.phase === GACHA_PHASE.OPENING) {
    elements.gachaStatus.textContent = "正在打开扭蛋...";
    return;
  }

  if (state.gachaCoins > 0) {
    elements.gachaStatus.textContent = "摇一摇，看看今天掉什么。";
    return;
  }

  elements.gachaStatus.textContent = "扭蛋币用完了，先去签到。";
}

function highlightPrizeCard(prizeId, options = {}) {
  const cards = [
    ...elements.giftGrid.querySelectorAll(".gift-item"),
    ...(elements.giftModalGrid?.querySelectorAll(".gift-item") ?? [])
  ];

  cards.forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.prizeId === prizeId);
  });

  if (!prizeId || options.immediate || !GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    return;
  }

  const target = elements.giftModal.hidden
    ? null
    : elements.giftModalGrid?.querySelector(`[data-prize-id="${prizeId}"]`);
  if (!target) {
    return;
  }

  GSAP.fromTo(target, { scale: 0.96 }, { scale: 1.04, duration: 0.2, repeat: 1, yoyo: true });
}

function animateCounter(element, from, to) {
  if (!GSAP || !gachaMotion || gachaMotion.reduceMotion) {
    element.textContent = to;
    return;
  }

  const proxy = { value: from };
  GSAP.to(proxy, {
    value: to,
    duration: 0.45,
    ease: "power1.out",
    onUpdate: () => {
      element.textContent = Math.round(proxy.value);
    }
  });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2400);
}

function burstHearts(anchor, count) {
  const rect = anchor.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let index = 0; index < count; index += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart material-symbols-outlined filled";
    heart.textContent = index % 3 === 0 ? "auto_awesome" : "favorite";
    heart.style.left = `${centerX + randomBetween(-24, 24)}px`;
    heart.style.top = `${centerY + randomBetween(-10, 10)}px`;
    heart.style.fontSize = `${randomBetween(16, 26)}px`;
    elements.particles.appendChild(heart);

    if (GSAP && (!gachaMotion || !gachaMotion.reduceMotion)) {
      GSAP.fromTo(
        heart,
        { x: 0, y: 0, scale: 0.84, autoAlpha: 1, rotation: 0 },
        {
          x: randomBetween(-18, 18),
          y: randomBetween(-92, -54),
          scale: randomBetween(1.1, 1.45),
          autoAlpha: 0,
          rotation: randomBetween(-24, 24),
          duration: randomBetween(0.9, 1.4),
          ease: "power2.out",
          onComplete: () => heart.remove()
        }
      );
      continue;
    }

    const duration = randomBetween(900, 1500);
    heart.style.animation = `heart-rise ${duration}ms ease-out forwards`;
    window.setTimeout(() => heart.remove(), duration + 120);
  }
}

function burstSparkles(anchor, count) {
  const rect = anchor.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let index = 0; index < count; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle-dot";
    sparkle.style.left = `${centerX}px`;
    sparkle.style.top = `${centerY}px`;
    elements.particles.appendChild(sparkle);

    if (GSAP && (!gachaMotion || !gachaMotion.reduceMotion)) {
      GSAP.fromTo(
        sparkle,
        { x: 0, y: 0, scale: 0.2, autoAlpha: 1 },
        {
          x: randomBetween(-68, 68),
          y: randomBetween(-50, 50),
          scale: randomBetween(0.7, 1.4),
          autoAlpha: 0,
          duration: randomBetween(0.45, 0.9),
          ease: "power2.out",
          onComplete: () => sparkle.remove()
        }
      );
      continue;
    }

    const duration = randomBetween(600, 1100);
    sparkle.style.animation = `sparkle-pop ${duration}ms ease-out forwards`;
    window.setTimeout(() => sparkle.remove(), duration + 120);
  }
}

function pickPrize() {
  const totalWeight = SITE_CONFIG.prizes.reduce((sum, prize) => sum + prize.weight, 0);
  let target = Math.random() * totalWeight;

  for (const prize of SITE_CONFIG.prizes) {
    target -= prize.weight;
    if (target <= 0) {
      return prize;
    }
  }

  return SITE_CONFIG.prizes[SITE_CONFIG.prizes.length - 1];
}

function buildGachaState() {
  return {
    phase: GACHA_PHASE.IDLE,
    pendingPrize: null,
    pendingTone: "pink",
    previousCoins: null
  };
}

function isGachaLocked() {
  return gachaState.phase !== GACHA_PHASE.IDLE;
}

function getGachaLockedMessage() {
  if (gachaState.phase === GACHA_PHASE.CAPSULE_READY) {
    return "先把掉出来的扭蛋打开，再去别的页面。";
  }

  if (gachaState.phase === GACHA_PHASE.OPENING) {
    return "惊喜正在打开中，先别急着离开。";
  }

  return "先等扭蛋机把礼物送出来，再切去别的页面。";
}

function pickCapsuleToneForPrize(prize) {
  if (prize.id === "mystery" && Math.random() > 0.35) {
    return "pearl";
  }

  const toneMap = {
    pink: ["pink", "rose", "peach"],
    lavender: ["lavender", "pearl", "pink"],
    cream: ["cream", "peach", "pearl"]
  };

  const tones = toneMap[prize.tone] || GACHA_CAPSULE_TONES;
  return tones[Math.floor(Math.random() * tones.length)];
}

function prepareRevealCapsule(prize, tone) {
  elements.revealCapsule.dataset.tone = tone;
  setPrizeVisual(elements.revealPrizeIcon, null, { alt: "礼物" });
  elements.revealCapsule.setAttribute("aria-label", "点一下打开扭蛋");
  elements.revealTip.textContent = "点一下打开扭蛋";
}

function getMonthProgress(monthKey) {
  const date = parseMonthKey(monthKey);
  const year = date.getFullYear();
  const month = date.getMonth();
  const total = new Date(year, month + 1, 0).getDate();
  const checked = state.checkIns.filter((checkIn) => checkIn.startsWith(`${monthKey}-`)).length;

  return {
    total,
    checked,
    label: `${year} 年 ${month + 1} 月`
  };
}

function getCurrentStreak() {
  const checkInSet = new Set(state.checkIns);
  const today = startOfDay(new Date());
  let cursor = new Date(today);
  let streak = 0;

  while (checkInSet.has(formatDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function getBirthdayCountdown() {
  const today = startOfDay(new Date());
  const birthday = startOfDay(new Date(SITE_CONFIG.birthdayDate));
  return Math.max(Math.ceil((birthday - today) / 86400000), 0);
}

function getTogetherDays() {
  const today = startOfDay(new Date());
  const start = startOfDay(new Date(SITE_CONFIG.relationshipStart));
  return Math.max(Math.floor((today - start) / 86400000) + 1, 1);
}

function formatBirthdayLabel() {
  const date = new Date(SITE_CONFIG.birthdayDate);
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日`;
}

function getPrizeById(prizeId) {
  return SITE_CONFIG.prizes.find((prize) => prize.id === prizeId) || SITE_CONFIG.prizes[0];
}

function loadState() {
  const fallback = buildDefaultState();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      audioEnabled: typeof parsed.audioEnabled === "boolean" ? parsed.audioEnabled : fallback.audioEnabled,
      checkIns: unique([...(parsed.checkIns || []), ...fallback.checkIns]).sort()
    };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyRequestedView() {
  const requestedView = getRequestedView();
  if (!requestedView) {
    return;
  }

  state.activeView = requestedView;
}

function buildDefaultState() {
  const seededCheckIns = [];
  const today = startOfDay(new Date());

  for (let offset = 4; offset >= 1; offset -= 1) {
    const seedDate = new Date(today);
    seedDate.setDate(seedDate.getDate() - offset);
    seededCheckIns.push(formatDateKey(seedDate));
  }

  return {
    activeView: "letter",
    audioEnabled: true,
    calendarMonth: monthString(today),
    checkIns: seededCheckIns,
    loveNotes: 12,
    gachaCoins: DEFAULT_GACHA_COINS,
    hugsSent: 0,
    drawHistory: []
  };
}

function unique(list) {
  return [...new Set(list)];
}

function getRequestedView() {
  const requested = new URLSearchParams(window.location.search).get("view") || window.location.hash.replace("#", "");
  return ["letter", "gacha", "daily"].includes(requested) ? requested : null;
}

function updateLocationHash(view) {
  const nextUrl = `${window.location.pathname}${window.location.search}#${view}`;
  window.history.replaceState(null, "", nextUrl);
}

function monthString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function parseMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateTime(isoString) {
  const date = new Date(isoString);
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日 ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function stopTimeline(timeline) {
  if (timeline && typeof timeline.kill === "function") {
    timeline.kill();
  }
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
