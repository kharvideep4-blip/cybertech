// dataRecoveryContent.jsx
// ─────────────────────────────────────────────────────────────
// SELF-CONTAINED: All category data lives here.
// No external imports from lib/ needed.
//
// HOW TO USE:
//   import { dataRecoveryCategories, getCategoryBySlug } from "./dataRecoveryContent";
//
// In Navbar.jsx, app/services/page.jsx, app/services/data-recovery/page.jsx,
// and app/services/data-recovery/[slug]/page.jsx — import from this file.
// ─────────────────────────────────────────────────────────────

export const dataRecoveryCategories = [
  {
    slug: "hard-disk-data-recovery",
    label: "Hard Disk Data Recovery",
    icon: "💾",
    shortDesc:
      "Professional HDD recovery from all failure types including head crashes, firmware corruption, and physical damage.",
    heroTitle: "Hard Disk Data Recovery",
    heroSubtitle:
      "Recover data from any HDD failure — physical, logical, or firmware-level.",
    sections: [
      {
        heading: "What We Recover",
        body: "We recover data from all major hard disk failures: clicking or grinding sounds (head crash), drive not detected, accidental deletion, partition loss, bad sectors, firmware corruption, and water or fire damage.",
      },
      {
        heading: "Our Process",
        body: "Our engineers work in a Class 100 cleanroom environment. We diagnose the failure, repair or bypass the damaged component, clone the drive sector-by-sector, and extract your files safely.",
      },
      {
        heading: "Supported Brands",
        body: "Seagate, Western Digital, Toshiba, Hitachi, Samsung, Maxtor, Fujitsu, IBM — all capacities from 80GB to 20TB+.",
      },
    ],
    faqs: [
      {
        q: "How long does HDD recovery take?",
        a: "Standard recovery takes 3–5 business days. Emergency 24-hour service is available.",
      },
      {
        q: "What if my drive makes clicking sounds?",
        a: "Turn it off immediately. Clicking indicates a head crash — continued use causes further platter damage.",
      },
    ],
  },
  {
    slug: "camera-data-recovery",
    label: "Camera Data Recovery",
    icon: "📷",
    shortDesc:
      "Recover deleted or corrupted photos and videos from all camera brands and memory cards.",
    heroTitle: "Camera Data Recovery",
    heroSubtitle:
      "Lost vacation photos? Accidentally formatted your SD card? We get them back.",
    sections: [
      {
        heading: "What We Recover",
        body: "Deleted photos, accidentally formatted cards, corrupted RAW files, broken camera bodies, and unreadable memory cards from all camera brands — Canon, Nikon, Sony, Fuji, GoPro, DJI drones.",
      },
      {
        heading: "Supported Formats",
        body: "JPEG, RAW (CR2, CR3, NEF, ARW, DNG, ORF, RW2), MP4, MOV, AVI, and all major camera video formats.",
      },
    ],
    faqs: [
      {
        q: "Can I recover photos after formatting?",
        a: "Yes — formatting only removes the file index. The actual photo data remains until overwritten.",
      },
      {
        q: "Do you recover drone footage?",
        a: "Yes, including DJI, Parrot, and Autel drones.",
      },
    ],
  },
  {
    slug: "cd-dvd-blu-data-recovery",
    label: "CD / DVD / Blu-ray Recovery",
    icon: "💿",
    shortDesc:
      "Extract data from scratched, cracked, or unreadable optical discs.",
    heroTitle: "CD / DVD / Blu-ray Data Recovery",
    heroSubtitle:
      "Optical disc unreadable? We have specialist equipment to recover your data.",
    sections: [
      {
        heading: "What We Recover",
        body: "Scratched CDs, DVDs, and Blu-ray discs, cracked or broken discs, delaminated discs, discs with print-side damage, and aged/oxidized media.",
      },
      {
        heading: "Our Method",
        body: "We use professional disc polishing and proprietary optical readers to extract data even from severely damaged discs that consumer software cannot read.",
      },
    ],
    faqs: [
      {
        q: "Can a cracked disc be recovered?",
        a: "Sometimes. Surface cracks that don't cross the data layer can often be recovered. Fully split discs are usually unrecoverable.",
      },
    ],
  },
  {
    slug: "encrypted-file-recovery",
    label: "Encrypted File Recovery",
    icon: "🔐",
    shortDesc:
      "Recover access to encrypted files, lost encryption keys, and BitLocker/VeraCrypt volumes.",
    heroTitle: "Encrypted File Recovery",
    heroSubtitle:
      "Lost your password or encryption key? We specialize in encrypted volume recovery.",
    sections: [
      {
        heading: "Scenarios We Handle",
        body: "Lost BitLocker recovery key, forgotten VeraCrypt passphrase, corrupted encrypted volumes, TrueCrypt containers, EFS recovery after Windows reinstall, and PGP key recovery.",
      },
      {
        heading: "Our Approach",
        body: "We use metadata analysis, partial key reconstruction, and authorized forensic techniques. We never attempt brute-force attacks that could trigger wipe mechanisms.",
      },
    ],
    faqs: [
      {
        q: "Can you recover ransomware-encrypted files?",
        a: "In some cases yes — see our dedicated Ransomware Recovery service for details.",
      },
      {
        q: "Is my data kept confidential?",
        a: "Absolutely. We sign NDAs and follow strict data handling protocols.",
      },
    ],
  },
  {
    slug: "solid-state-drive-recovery",
    label: "Solid State Drive Recovery",
    icon: "⚡",
    shortDesc:
      "SSD and NVMe data recovery including controller failure, NAND damage, and sudden death syndrome.",
    heroTitle: "Solid State Drive (SSD) Recovery",
    heroSubtitle:
      "SSDs fail differently than HDDs. Our engineers understand NAND flash at the chip level.",
    sections: [
      {
        heading: "SSD Failure Types We Handle",
        body: "Controller failure (sudden death), NAND flash wear-out, firmware bugs causing the drive to go read-only or disappear, PCB damage, and water/electrical damage.",
      },
      {
        heading: "NVMe & M.2 Support",
        body: "We recover from all SSD form factors: 2.5\" SATA, M.2 SATA, M.2 NVMe, PCIe, and enterprise U.2 drives from Samsung, WD, Crucial, Kingston, Seagate, and more.",
      },
    ],
    faqs: [
      {
        q: "Why did my SSD suddenly stop working?",
        a: "SSDs can suffer 'sudden death' from controller failure — the drive simply stops responding without warning.",
      },
      {
        q: "Is SSD recovery more expensive than HDD?",
        a: "It can be, due to chip-level work required. We provide a free diagnosis and quote before proceeding.",
      },
    ],
  },
  {
    slug: "server-data-recovery",
    label: "Server Data Recovery",
    icon: "🖥️",
    shortDesc:
      "RAID array recovery, NAS/SAN data recovery, and enterprise server storage restoration.",
    heroTitle: "Server Data Recovery",
    heroSubtitle:
      "RAID failed? NAS corrupted? We restore enterprise storage systems with zero data loss.",
    sections: [
      {
        heading: "RAID Recovery",
        body: "We recover RAID 0, 1, 5, 6, 10, 50, 60 arrays regardless of how many drives have failed. We reconstruct RAID parameters (stripe size, order, parity) even without documentation.",
      },
      {
        heading: "NAS & SAN Recovery",
        body: "Synology, QNAP, Drobo, Buffalo, Netgear ReadyNAS, Dell EMC, NetApp, HPE — all supported. We also handle iSCSI and Fibre Channel SANs.",
      },
    ],
    faqs: [
      {
        q: "Can you recover a RAID 5 with 2 failed drives?",
        a: "RAID 5 can only tolerate 1 drive failure by design. With 2 failures, recovery is possible but requires specialized reconstruction — contact us for assessment.",
      },
    ],
  },
  {
    slug: "novell-data-recovery",
    label: "Novell Data Recovery",
    icon: "🗄️",
    shortDesc:
      "Recovery for Novell NetWare and OES file systems including NSS and Traditional volumes.",
    heroTitle: "Novell Data Recovery",
    heroSubtitle:
      "Specialists in legacy Novell NetWare and Open Enterprise Server environments.",
    sections: [
      {
        heading: "Supported Systems",
        body: "Novell NetWare 3.x, 4.x, 5.x, 6.x, Novell OES (Open Enterprise Server), NSS volumes, Traditional NetWare volumes, and GroupWise data recovery.",
      },
    ],
    faqs: [
      {
        q: "Do you still support NetWare 4?",
        a: "Yes — we maintain expertise in legacy Novell environments that most recovery firms no longer support.",
      },
    ],
  },
  {
    slug: "password-data-recovery",
    label: "Password Data Recovery",
    icon: "🔑",
    shortDesc:
      "Recover access to password-protected files, documents, archives, and system accounts.",
    heroTitle: "Password Data Recovery",
    heroSubtitle:
      "Locked out of your files or system? We recover authorized access quickly.",
    sections: [
      {
        heading: "File Types Supported",
        body: "MS Office documents (Word, Excel, PowerPoint), PDF files, ZIP/RAR/7z archives, QuickBooks files, AutoCAD drawings, and Windows/Linux login credentials.",
      },
      {
        heading: "Legal Notice",
        body: "We only assist authorized owners. Proof of ownership is required for all password recovery jobs.",
      },
    ],
    faqs: [
      {
        q: "Can you recover an Excel password instantly?",
        a: "Older Excel formats (97–2003) can often be recovered in minutes. Newer .xlsx encryption is stronger and may take longer.",
      },
    ],
  },
  {
    slug: "mobile-iphone-data-recovery",
    label: "Mobile / iPhone Data Recovery",
    icon: "📱",
    shortDesc:
      "Recover deleted contacts, messages, photos, and app data from iOS and Android devices.",
    heroTitle: "Mobile & iPhone Data Recovery",
    heroSubtitle:
      "Broken screen, water damage, or deleted data — we recover it all.",
    sections: [
      {
        heading: "iOS Recovery",
        body: "Recover from iPhone and iPad: deleted messages (iMessage, WhatsApp), photos, contacts, call logs, notes, and app data — even without an iTunes or iCloud backup.",
      },
      {
        heading: "Android Recovery",
        body: "Samsung, Google Pixel, OnePlus, Xiaomi, Oppo — all Android brands supported. Recover from broken screens, water damage, factory reset, and logical deletion.",
      },
    ],
    faqs: [
      {
        q: "My iPhone screen is black and won't turn on — can you recover data?",
        a: "Yes. We use chip-level extraction techniques to access data without needing the screen to function.",
      },
    ],
  },
  {
    slug: "file-recovery-and-repair",
    label: "File Recovery & Repair",
    icon: "🔧",
    shortDesc:
      "Repair corrupted Word, Excel, PDF, video, database, and other file types.",
    heroTitle: "File Recovery & Repair",
    heroSubtitle:
      "Corrupted file won't open? Our repair specialists restore your documents.",
    sections: [
      {
        heading: "File Types We Repair",
        body: "Microsoft Office (DOCX, XLSX, PPTX), PDF, PST/OST Outlook files, ZIP/RAR archives, MP4/MOV/AVI videos, JPEG/RAW photos, SQL databases, and AutoCAD DWG files.",
      },
    ],
    faqs: [
      {
        q: "Is file repair different from data recovery?",
        a: "Yes — repair fixes a file that exists but is corrupted. Data recovery retrieves files that are deleted or inaccessible due to storage failure.",
      },
    ],
  },
  {
    slug: "apple-mac-os-data-recovery",
    label: "Apple Mac OS Data Recovery",
    icon: "🍎",
    shortDesc:
      "Data recovery from Mac computers, MacBooks, iMacs, and Apple T2/M1/M2 chip machines.",
    heroTitle: "Apple Mac OS Data Recovery",
    heroSubtitle:
      "Specialists in HFS+, APFS, and Apple Silicon storage recovery.",
    sections: [
      {
        heading: "Mac-Specific Expertise",
        body: "We handle APFS and HFS+ volumes, Time Machine backup recovery, Fusion Drive recovery, and data extraction from Apple T2-secured and M1/M2/M3 Macs.",
      },
      {
        heading: "Supported Devices",
        body: "MacBook Air, MacBook Pro (all generations), iMac, Mac mini, Mac Pro, and Mac Studio.",
      },
    ],
    faqs: [
      {
        q: "Can you recover from an M2 MacBook with a dead logic board?",
        a: "Yes — though Apple Silicon integrates storage into the SoC, we have specialized equipment for chip-level extraction.",
      },
    ],
  },
  {
    slug: "email-recovery-services",
    label: "Email Recovery Services",
    icon: "📧",
    shortDesc:
      "Recover deleted emails, corrupted PST/OST files, and lost Exchange mailboxes.",
    heroTitle: "Email Recovery Services",
    heroSubtitle:
      "Lost critical emails? We recover from Outlook, Exchange, Gmail, and more.",
    sections: [
      {
        heading: "Platforms Supported",
        body: "Microsoft Outlook PST/OST recovery, Exchange Server mailbox recovery, Office 365/M365 data recovery, Thunderbird, Lotus Notes, and MBOX format recovery.",
      },
    ],
    faqs: [
      {
        q: "Can permanently deleted Outlook emails be recovered?",
        a: "Often yes — if the PST file is intact, permanently deleted items may still be in the file until the space is overwritten.",
      },
    ],
  },
  {
    slug: "tablet-data-recovery",
    label: "Tablet Data Recovery",
    icon: "📲",
    shortDesc: "Recover data from iPads, Android tablets, and Surface devices.",
    heroTitle: "Tablet Data Recovery",
    heroSubtitle:
      "Cracked, water-damaged, or unresponsive tablet? We recover your data.",
    sections: [
      {
        heading: "Supported Tablets",
        body: "Apple iPad (all models), Samsung Galaxy Tab, Microsoft Surface, Amazon Fire, Lenovo Tab, Huawei MatePad.",
      },
    ],
    faqs: [
      {
        q: "My tablet fell in water — is data recovery still possible?",
        a: "Yes, if you power it off immediately and don't attempt to charge it. Bring it to us as soon as possible.",
      },
    ],
  },
  {
    slug: "windows-data-recovery",
    label: "Windows Data Recovery",
    icon: "🪟",
    shortDesc:
      "Recover data from Windows systems after crash, corruption, upgrade failure, or accidental deletion.",
    heroTitle: "Windows Data Recovery",
    heroSubtitle:
      "Windows crashed or won't boot? We recover your files without reinstalling.",
    sections: [
      {
        heading: "Scenarios We Cover",
        body: "Blue screen of death (BSOD), Windows update failure, MBR/GPT corruption, accidental deletion, Recycle Bin emptied, partition loss, and Windows upgrade gone wrong.",
      },
      {
        heading: "Supported Versions",
        body: "Windows XP through Windows 11, including Server 2003–2022.",
      },
    ],
    faqs: [
      {
        q: "Can you recover files if Windows won't boot?",
        a: "Yes — we boot from external tools to access the drive independently of the operating system.",
      },
    ],
  },
  {
    slug: "ms-office-data-recovery",
    label: "MS Office Data Recovery",
    icon: "📄",
    shortDesc:
      "Recover corrupted or lost Word, Excel, PowerPoint, and Access files.",
    heroTitle: "MS Office Data Recovery",
    heroSubtitle:
      "Corrupted Excel sheet or lost Word document? We recover and repair Office files.",
    sections: [
      {
        heading: "Office File Recovery",
        body: "Recovery and repair for DOCX, XLSX, PPTX, ACCDB, MDB (Access), and OneNote files. We handle both logical corruption and storage-level loss.",
      },
    ],
    faqs: [
      {
        q: "Excel says the file is corrupt — can it be fixed?",
        a: "Usually yes. Excel corruption is one of the most common file repair requests we handle.",
      },
    ],
  },
  {
    slug: "unix-linux-data-recovery",
    label: "UNIX & LINUX Data Recovery",
    icon: "🐧",
    shortDesc:
      "Data recovery for ext2/3/4, XFS, ZFS, Btrfs, and other Linux file systems.",
    heroTitle: "UNIX & Linux Data Recovery",
    heroSubtitle:
      "Expert recovery for all Linux and UNIX file systems and server environments.",
    sections: [
      {
        heading: "File Systems Supported",
        body: "ext2, ext3, ext4, XFS, ZFS, Btrfs, JFS, ReiserFS, UFS (Solaris/FreeBSD), and HFS+ under Linux.",
      },
      {
        heading: "UNIX Variants",
        body: "Linux (all distributions), FreeBSD, OpenBSD, Solaris, AIX, and HP-UX.",
      },
    ],
    faqs: [
      {
        q: "Can you recover a ZFS pool that won't import?",
        a: "Yes — ZFS pool import failures are a specialty. We analyze the pool metadata and reconstruct it.",
      },
    ],
  },
  {
    slug: "usb-drive-data-recovery",
    label: "USB Drive Data Recovery",
    icon: "🔌",
    shortDesc:
      "Recover data from broken, corrupted, or not-recognized USB flash drives and pen drives.",
    heroTitle: "USB Drive Data Recovery",
    heroSubtitle:
      "USB not recognized or snapped off? We perform chip-level flash recovery.",
    sections: [
      {
        heading: "Physical Damage Recovery",
        body: "Broken USB connector, snapped PCB, water damage, and burnt USB drives. We de-solder the NAND flash chip and read it directly when the controller is damaged.",
      },
    ],
    faqs: [
      {
        q: "My USB shows 0 bytes — is it recoverable?",
        a: "Often yes. This is usually a controller failure, not flash damage.",
      },
    ],
  },
  {
    slug: "tape-data-recovery",
    label: "Tape Data Recovery",
    icon: "📼",
    shortDesc:
      "Recover data from LTO, DLT, DAT, and other magnetic tape formats.",
    heroTitle: "Tape Data Recovery",
    heroSubtitle:
      "Legacy or damaged tape backups? We have the hardware and expertise to read them.",
    sections: [
      {
        heading: "Supported Tape Formats",
        body: "LTO (1–9), DLT, SDLT, DAT (DDS 1–6), AIT, 8mm, QIC, Travan, and 9-track open-reel tape.",
      },
    ],
    faqs: [
      {
        q: "My tape drive is broken — can you still read the tapes?",
        a: "Yes — we maintain a library of legacy tape drives specifically for this purpose.",
      },
    ],
  },
  {
    slug: "memory-card-data-recovery",
    label: "Memory Card Data Recovery",
    icon: "🗃️",
    shortDesc:
      "Recover data from SD, microSD, CF, XQD, and other memory card formats.",
    heroTitle: "Memory Card Data Recovery",
    heroSubtitle:
      "Corrupted or accidentally formatted memory card? We recover your data.",
    sections: [
      {
        heading: "Supported Card Types",
        body: "SD, SDHC, SDXC, microSD, CompactFlash (CF), XQD, CFexpress, Sony Memory Stick, and MultiMediaCard (MMC).",
      },
    ],
    faqs: [
      {
        q: "Can I recover from a physically broken SD card?",
        a: "If the NAND chip is intact, yes — we can extract data directly from the chip.",
      },
    ],
  },
  {
    slug: "tally-data-recovery",
    label: "Tally Data Recovery",
    icon: "📊",
    shortDesc:
      "Recover corrupted or lost Tally ERP 9 and TallyPrime company data files.",
    heroTitle: "Tally Data Recovery",
    heroSubtitle:
      "Corrupted Tally company data? We restore your accounts without data loss.",
    sections: [
      {
        heading: "What We Recover",
        body: "Corrupted Tally.ERP 9 and TallyPrime data files (Manager.900, *.900 company files), data lost due to hard disk failure, accidental deletion, or ransomware encryption.",
      },
      {
        heading: "India-Specific Expertise",
        body: "We understand Indian accounting requirements (GST, TDS) and ensure recovered data maintains full integrity for compliance purposes.",
      },
    ],
    faqs: [
      {
        q: "Can you recover Tally data after ransomware attack?",
        a: "Yes — see our Ransomware Recovery service. We specialize in Tally data restoration post-ransomware.",
      },
    ],
  },
  {
    slug: "laptop-data-recovery",
    label: "Laptop Data Recovery",
    icon: "💻",
    shortDesc:
      "Data recovery from all laptop brands after physical damage, liquid spill, or drive failure.",
    heroTitle: "Laptop Data Recovery",
    heroSubtitle: "Spilled water on your laptop or dropped it? We recover your data.",
    sections: [
      {
        heading: "Brands We Support",
        body: "Dell, HP, Lenovo, Asus, Acer, MSI, Toshiba, Sony VAIO, Samsung, LG, Razer, Microsoft Surface Laptop.",
      },
      {
        heading: "Common Scenarios",
        body: "Liquid spill damage, dropped laptop with failed drive, laptop won't turn on, corrupted Windows/macOS, accidental deletion, and failed SSD.",
      },
    ],
    faqs: [
      {
        q: "My laptop fell and now makes a clicking sound — what should I do?",
        a: "Power it off immediately and do not attempt to restart. The clicking indicates HDD head damage. Every power cycle causes further platter damage.",
      },
    ],
  },
];

// ─── Helper used in [slug]/page.jsx ───────────────────────────
export function getCategoryBySlug(slug) {
  return dataRecoveryCategories.find((c) => c.slug === slug) || null;
}
