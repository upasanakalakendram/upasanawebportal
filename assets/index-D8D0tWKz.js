(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;

  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);

  new MutationObserver((s) => {
    for (const t of s)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          if (r.tagName === "LINK" && r.rel === "modulepreload") o(r);
  }).observe(document, { childList: true, subtree: true });

  function i(s) {
    const t = {};
    if (s.integrity) t.integrity = s.integrity;
    if (s.referrerPolicy) t.referrerPolicy = s.referrerPolicy;
    if (s.crossOrigin === "use-credentials") t.credentials = "include";
    else if (s.crossOrigin === "anonymous") t.credentials = "omit";
    else t.credentials = "same-origin";
    return t;
  }

  function o(s) {
    if (s.ep) return;
    s.ep = true;
    const t = i(s);
    fetch(s.href, t);
  }
})();

const m = [
  {
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    image:
      "https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "One of the oldest and most widely practiced classical dance forms of India, characterized by fixed upper torso, bent legs, and a rich vocabulary of hand gestures and facial expressions.",
  },
  {
    name: "Mohiniyattam",
    origin: "Kerala",
    image:
      "https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A graceful dance form from Kerala, traditionally performed by women. The name refers to the mythical enchantress Mohini, and the dance is known for its gentle, swaying movements.",
  },
  {
    name: "Kathakali",
    origin: "Kerala",
    image:
      "https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A highly stylized classical dance-drama from Kerala, distinguished by its elaborate makeup, intricate costumes, and expressive facial gestures that bring ancient epics to life.",
  },
  {
    name: "Ottan Thullal",
    origin: "Kerala",
    image:
      "https://images.pexels.com/photos/16715886/pexels-photo-16715886.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A solo performance art from Kerala combining dance, poetry, and music. Known for its humor, social commentary, and the distinctive green makeup and ornate costume of the performer.",
  },
  {
    name: "Kerala Nadanam",
    origin: "Kerala",
    image:
      "https://images.pexels.com/photos/28236025/pexels-photo-28236025.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A contemporary classical dance form that blends elements of Kerala's traditional dance heritage. It celebrates the cultural richness of the region with elegant choreography.",
  },
  {
    name: "Folk & Ritual Arts",
    origin: "South India",
    image:
      "https://images.pexels.com/photos/5262079/pexels-photo-5262079.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Beyond the classical forms, we offer training in various regional folk and ritual performance traditions that form the living cultural fabric of South India.",
  },
];

const A = [
  {
    src: "https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bharatanatyam dancer performing on stage",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Mohiniyattam dancer in Kerala setting",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kathakali dancer in vibrant costume",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/16715886/pexels-photo-16715886.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dancer in traditional Indian dress",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/28236025/pexels-photo-28236025.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kerala cultural performance",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/5262079/pexels-photo-5262079.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Indian classical dance pose",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Traditional Bharatanatyam dancer in Kerala attire",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/30424951/pexels-photo-30424951.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Graceful classical dancer performing",
    span: "",
  },
];

const k = [
  {
    name: "Smt. Lakshmi Nair",
    role: "Artistic Director · Bharatanatyam",
    bio: "With over 25 years of experience, Lakshmi ji trained under the legendary Kalakshetra tradition and has performed across India and abroad.",
    photo:
      "https://images.pexels.com/photos/30444651/pexels-photo-30444651.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sri. Ravi Menon",
    role: "Senior Guru · Kathakali",
    bio: "A seasoned Kathakali performer trained at Kalamandalam, Ravi ji specializes in the Pacha and Kathi character roles.",
    photo:
      "https://images.pexels.com/photos/34058995/pexels-photo-34058995.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Smt. Karthika Krishnakumar",
    role: "Instructor · Mohiniyattam",
    bio: "An accomplished Mohiniyattam dancer, Karthika brings a contemporary sensibility to this ancient art while honoring its classical roots.",
    photo:
      "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const I = [
  {
    day: "15",
    month: "Aug",
    year: 2026,
    title: "Annual Day Recital — Nritha Sandhya",
    time: "5:00 PM",
    venue: "Main Auditorium",
    desc: "An evening of solo and group performances by our senior students, showcasing all dance forms taught at the academy.",
  },
  {
    day: "02",
    month: "Sep",
    year: 2026,
    title: "Kathakali Workshop with Guest Guru",
    time: "10:00 AM",
    venue: "Studio Hall",
    desc: "A special intensive workshop on Kathakali mudras and abhinaya, open to intermediate and advanced students.",
  },
  {
    day: "21",
    month: "Oct",
    year: 2026,
    title: "Navaratri Cultural Festival",
    time: "6:30 PM",
    venue: "Open Air Theatre",
    desc: "A nine-night celebration of classical dance and music, featuring performances by gurus and invited artists.",
  },
  {
    day: "10",
    month: "Dec",
    year: 2026,
    title: "Arangetram — Debut Performance",
    time: "5:30 PM",
    venue: "Main Auditorium",
    desc: "The stage debut of our graduating Bharatanatyam students, marking their formal entry into the world of performance.",
  },
];

const l = [
  {
    quote:
      "Upasana Kalakendram has been a second home for my daughter. The gurus are not just teachers but mentors who nurture both art and character.",
    author: "Anjali Krishnan",
    role: "Parent",
  },
  {
    quote:
      "The depth of training here is remarkable. I came in as a beginner and within three years I performed my Arangetram with confidence.",
    author: "Meera Suresh",
    role: "Senior Student",
  },
  {
    quote:
      "As someone who returned to dance after 20 years, the academy welcomed me with warmth and patience. The Mohiniyattam classes are pure joy.",
    author: "Dr. Vinaya Pillai",
    role: "Adult Learner",
  },
];

const S = document.querySelector("#app");
S.innerHTML = "\n";