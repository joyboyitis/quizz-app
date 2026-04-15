export type Question = {
  id: number;
  category: "UAS" | "C-UAS";
  question: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanation: string;
};

export const questions: Question[] = [
  // UAS Questions (20)
  {
    id: 1,
    category: "UAS",
    question: "What does UAS stand for?",
    options: [
      "Unmanned Aerial System",
      "Unified Aerial Surveillance",
      "Unmanned Aircraft Squadron",
      "Universal Airborne Sensor",
    ],
    correctAnswer: 0,
    explanation:
      "UAS stands for Unmanned Aerial System, which encompasses the entire system including the aircraft, ground control station, and communication links.",
  },
  {
    id: 2,
    category: "UAS",
    question: "What is the primary advantage of a fixed-wing UAS over a rotary-wing UAS?",
    options: [
      "Better hovering capability",
      "Longer endurance and range",
      "Easier vertical takeoff and landing",
      "Greater maneuverability in tight spaces",
    ],
    correctAnswer: 1,
    explanation:
      "Fixed-wing UAS are more aerodynamically efficient, providing significantly longer endurance and range compared to rotary-wing (multi-rotor) systems.",
  },
  {
    id: 3,
    category: "UAS",
    question: "Which FAA regulation governs commercial drone operations under 55 lbs?",
    options: ["Part 107", "Part 101", "Part 135", "Part 91"],
    correctAnswer: 0,
    explanation:
      "FAA Part 107 (Small Unmanned Aircraft Systems) governs commercial UAS operations for aircraft weighing less than 55 pounds.",
  },
  {
    id: 4,
    category: "UAS",
    question: "What is the maximum altitude for drone operations under FAA Part 107 without special authorization?",
    options: ["300 feet AGL", "400 feet AGL", "500 feet AGL", "1000 feet AGL"],
    correctAnswer: 1,
    explanation:
      "Under FAA Part 107, drones must fly at or below 400 feet above ground level (AGL) unless flying within a 400-foot radius of a structure.",
  },
  {
    id: 5,
    category: "UAS",
    question: "What communication link does a UAS use to receive commands from the ground control station?",
    options: ["Uplink", "Downlink", "Sidelink", "Crosslink"],
    correctAnswer: 0,
    explanation:
      "The uplink is the communication channel from the ground control station to the UAS carrying commands and control inputs. The downlink carries data from the UAS to the ground.",
  },
  {
    id: 6,
    category: "UAS",
    question: "What is 'Return to Home' (RTH) in UAS terminology?",
    options: [
      "A navigation mode where the drone returns to its launch point automatically",
      "A radio frequency used for emergency communications",
      "A failsafe mechanism that shuts down all systems",
      "A ground controller software feature",
    ],
    correctAnswer: 0,
    explanation:
      "Return to Home (RTH) is an automated failsafe feature that directs a UAS to fly back to its pre-set home point, typically the launch location, when triggered.",
  },
  {
    id: 7,
    category: "UAS",
    question: "Which type of UAS payload is used for terrain mapping and 3D modeling?",
    options: ["EO/IR camera", "LiDAR sensor", "Electronic warfare pod", "Acoustic sensor"],
    correctAnswer: 1,
    explanation:
      "LiDAR (Light Detection and Ranging) sensors emit laser pulses to measure distances, enabling precise terrain mapping and 3D model generation from UAS platforms.",
  },
  {
    id: 8,
    category: "UAS",
    question: "What does 'BVLOS' stand for in UAS operations?",
    options: [
      "Below Visual Line of Sight",
      "Beyond Visual Line of Sight",
      "Basic Visual Landing Operations System",
      "Broad Vehicle Launch and Operations System",
    ],
    correctAnswer: 1,
    explanation:
      "BVLOS stands for Beyond Visual Line of Sight, referring to UAS operations where the pilot cannot directly see the aircraft with unaided eyes.",
  },
  {
    id: 9,
    category: "UAS",
    question: "What is 'geofencing' in UAS operations?",
    options: [
      "A physical barrier around a drone landing pad",
      "Software-defined virtual geographic boundaries that restrict drone flight",
      "A fence-detection sensor payload",
      "A regulatory zone for agricultural drones only",
    ],
    correctAnswer: 1,
    explanation:
      "Geofencing uses GPS coordinates to define virtual boundaries that either alert the pilot or automatically prevent a UAS from entering restricted airspace.",
  },
  {
    id: 10,
    category: "UAS",
    question: "Which UAS category is characterized by hand-launched capability and a weight below 2 lbs?",
    options: [
      "Group 1",
      "Group 2",
      "Group 3",
      "Group 4",
    ],
    correctAnswer: 0,
    explanation:
      "Group 1 UAS are the smallest category, weighing less than 20 lbs (typically under 2 lbs for the smallest), operating below 1,200 ft AGL, and often hand-launched.",
  },
  {
    id: 11,
    category: "UAS",
    question: "What is the purpose of an Inertial Measurement Unit (IMU) in a UAS?",
    options: [
      "To measure wind speed and direction",
      "To measure acceleration, angular rate, and magnetic field for navigation and stabilization",
      "To monitor battery voltage levels",
      "To relay telemetry data to ground station",
    ],
    correctAnswer: 1,
    explanation:
      "An IMU measures the UAS's specific force, angular rate, and sometimes magnetic field, providing critical data for flight stabilization and navigation systems.",
  },
  {
    id: 12,
    category: "UAS",
    question: "What does 'MALE' stand for in UAS classification?",
    options: [
      "Medium Altitude Long Endurance",
      "Maximum Altitude Low Endurance",
      "Medium Autonomous Level Engagement",
      "Manned Aircraft Liaison Element",
    ],
    correctAnswer: 0,
    explanation:
      "MALE stands for Medium Altitude Long Endurance, describing a class of UAS that operates at medium altitudes (up to ~50,000 ft) for extended mission durations (24+ hours).",
  },
  {
    id: 13,
    category: "UAS",
    question: "Which frequency band is commonly used for UAS control links?",
    options: ["AM broadcast band (540-1600 kHz)", "2.4 GHz and 5.8 GHz ISM bands", "FM broadcast band (88-108 MHz)", "Satellite Ka-band only"],
    correctAnswer: 1,
    explanation:
      "Most commercial UAS use the 2.4 GHz and 5.8 GHz ISM (Industrial, Scientific, and Medical) bands for their control links due to availability and bandwidth.",
  },
  {
    id: 14,
    category: "UAS",
    question: "What is a 'swarm' in UAS terminology?",
    options: [
      "A single UAS with multiple cameras",
      "A coordinated group of multiple UAS operating together",
      "An insect-inspired navigation algorithm",
      "A type of fixed-wing UAS with folding wings",
    ],
    correctAnswer: 1,
    explanation:
      "A UAS swarm is a coordinated group of multiple unmanned systems that work together, often using distributed algorithms, to accomplish tasks cooperatively.",
  },
  {
    id: 15,
    category: "UAS",
    question: "What does Remote ID do for UAS?",
    options: [
      "Remotely disables a drone's propulsion",
      "Broadcasts identification and location information about the UAS in flight",
      "Identifies remote control radio frequencies",
      "Assigns GPS coordinates for takeoff zones",
    ],
    correctAnswer: 1,
    explanation:
      "Remote ID broadcasts identification and location information (drone ID, location, speed, altitude, and operator location) allowing authorities to identify UAS in flight.",
  },
  {
    id: 16,
    category: "UAS",
    question: "Which type of UAS is best suited for hovering surveillance of a fixed point?",
    options: [
      "Fixed-wing UAS",
      "Multi-rotor UAS",
      "Blended wing UAS",
      "Powered glider UAS",
    ],
    correctAnswer: 1,
    explanation:
      "Multi-rotor UAS (quadcopters, hexacopters, etc.) can hover in place, making them ideal for fixed-point surveillance. Fixed-wing systems must maintain forward flight.",
  },
  {
    id: 17,
    category: "UAS",
    question: "What is a Ground Control Station (GCS)?",
    options: [
      "The GPS satellite network used by drones",
      "The human-operated interface used to command and monitor a UAS",
      "A designated landing pad for drones",
      "The drone's onboard autopilot system",
    ],
    correctAnswer: 1,
    explanation:
      "A GCS is the ground-based interface (hardware and software) used by operators to command the UAS, receive telemetry, view sensor data, and monitor mission status.",
  },
  {
    id: 18,
    category: "UAS",
    question: "What is 'detect and avoid' (DAA) technology in UAS?",
    options: [
      "Software that helps drones avoid GPS jamming",
      "Systems enabling UAS to sense and avoid obstacles and other aircraft",
      "Radar used to detect enemy drones",
      "A type of camouflage coating for military UAS",
    ],
    correctAnswer: 1,
    explanation:
      "DAA (Detect and Avoid) technology enables UAS to detect potential collision threats — including other aircraft and obstacles — and take automated avoidance maneuvers.",
  },
  {
    id: 19,
    category: "UAS",
    question: "What is the typical control range of a consumer-grade UAS without signal boosting?",
    options: [
      "100-500 meters",
      "1-8 kilometers",
      "20-50 kilometers",
      "100+ kilometers",
    ],
    correctAnswer: 1,
    explanation:
      "Consumer-grade UAS typically have control ranges of 1-8 km depending on conditions and regulations. High-end consumer models may achieve up to 10-12 km in ideal conditions.",
  },
  {
    id: 20,
    category: "UAS",
    question: "What does 'EO/IR' refer to in UAS sensor payloads?",
    options: [
      "Electromagnetic Output / Infrared",
      "Electro-Optical / Infrared",
      "Electronic Operations / Intelligence Receiver",
      "Extended Operations / Integrated Radar",
    ],
    correctAnswer: 1,
    explanation:
      "EO/IR stands for Electro-Optical/Infrared, referring to sensor payloads that combine visible-light cameras (EO) with thermal infrared sensors (IR) for day/night surveillance.",
  },

  // C-UAS Questions (20)
  {
    id: 21,
    category: "C-UAS",
    question: "What does C-UAS stand for?",
    options: [
      "Counter Unmanned Aircraft Systems",
      "Controlled Unmanned Aerial Surveillance",
      "Combined Urban Air Systems",
      "Centralized UAS Command",
    ],
    correctAnswer: 0,
    explanation:
      "C-UAS stands for Counter Unmanned Aircraft Systems — systems and strategies designed to detect, track, identify, and neutralize unauthorized or hostile drones.",
  },
  {
    id: 22,
    category: "C-UAS",
    question: "Which C-UAS detection method can identify drones by their unique motor and rotor acoustic signatures?",
    options: [
      "Radar detection",
      "RF detection",
      "Acoustic detection",
      "Optical detection",
    ],
    correctAnswer: 2,
    explanation:
      "Acoustic detection systems use microphones and signal processing to identify drones by the distinctive sound patterns produced by their motors and rotors.",
  },
  {
    id: 23,
    category: "C-UAS",
    question: "What is a 'drone jammer'?",
    options: [
      "A physical net used to catch drones",
      "A device that disrupts the radio frequency link between a drone and its controller",
      "Software that crashes drone autopilot systems",
      "A laser system that destroys drone batteries",
    ],
    correctAnswer: 1,
    explanation:
      "A drone jammer transmits powerful RF signals on the frequencies used by drones to disrupt the command link, often causing the drone to land or return to its home point.",
  },
  {
    id: 24,
    category: "C-UAS",
    question: "What C-UAS technique uses high-power microwave energy to disable drone electronics?",
    options: [
      "Acoustic disruption",
      "Net capture",
      "Directed energy weapon (HPM)",
      "GPS spoofing",
    ],
    correctAnswer: 2,
    explanation:
      "High-Power Microwave (HPM) directed energy weapons emit concentrated microwave energy that can damage or destroy the electronic components of a drone at range.",
  },
  {
    id: 25,
    category: "C-UAS",
    question: "What is GPS spoofing in the context of C-UAS?",
    options: [
      "Blocking GPS signals entirely using noise",
      "Sending false GPS signals to manipulate a drone's perceived location",
      "Hacking the drone's onboard computer",
      "Physically removing the drone's GPS antenna",
    ],
    correctAnswer: 1,
    explanation:
      "GPS spoofing involves transmitting counterfeit GPS signals that override legitimate ones, causing a drone to believe it is somewhere other than its actual location, which can redirect it.",
  },
  {
    id: 26,
    category: "C-UAS",
    question: "Which C-UAS detection method is most effective for detecting drones at long range in all weather conditions?",
    options: [
      "Optical/EO cameras",
      "Acoustic sensors",
      "Radar",
      "RF spectrum analyzers",
    ],
    correctAnswer: 2,
    explanation:
      "Radar is the most effective all-weather, long-range detection method. Unlike optical or acoustic sensors, radar performance is minimally affected by weather, darkness, or distance.",
  },
  {
    id: 27,
    category: "C-UAS",
    question: "What is a 'drone net gun' used for?",
    options: [
      "Launching surveillance drones",
      "Physically capturing a drone by entangling its propellers with a net projectile",
      "Creating a radio frequency net to jam signals",
      "Deploying multiple drones simultaneously",
    ],
    correctAnswer: 1,
    explanation:
      "A drone net gun fires a net projectile that entangles the drone's propellers, causing it to fall. It's a kinetic, non-destructive capture method useful when the drone must be recovered intact.",
  },
  {
    id: 28,
    category: "C-UAS",
    question: "What is the primary limitation of RF jamming as a C-UAS countermeasure?",
    options: [
      "It cannot affect military-grade drones",
      "It may affect other RF-dependent systems in the area causing collateral interference",
      "It only works against fixed-wing drones",
      "It requires physical contact with the drone",
    ],
    correctAnswer: 1,
    explanation:
      "RF jamming broadcasts powerful signals across frequencies, which can interfere with communications, navigation, and other systems beyond the target drone — causing significant collateral interference.",
  },
  {
    id: 29,
    category: "C-UAS",
    question: "What is a 'counter-drone drone' (interceptor drone)?",
    options: [
      "A drone equipped with cameras to identify other drones",
      "A UAS specifically designed to physically intercept and neutralize rogue drones",
      "A ground-based anti-drone system",
      "A drone that carries jamming equipment",
    ],
    correctAnswer: 1,
    explanation:
      "Interceptor drones are purpose-built UAS designed to chase, capture (via nets), or ram hostile drones. They represent a kinetic C-UAS approach that avoids RF interference.",
  },
  {
    id: 30,
    category: "C-UAS",
    question: "What does 'layered defense' mean in C-UAS strategy?",
    options: [
      "Using multiple layers of physical netting around a protected area",
      "Employing multiple detection and countermeasure systems with overlapping capabilities",
      "Deploying drones in defensive layers above a facility",
      "Stacking radar arrays for better coverage",
    ],
    correctAnswer: 1,
    explanation:
      "Layered defense in C-UAS refers to integrating multiple detection and neutralization systems (radar + RF + optical + jammers + kinetic) that complement each other and provide redundancy.",
  },
  {
    id: 31,
    category: "C-UAS",
    question: "Which government agency in the US has primary authority to take action against rogue drones near federal facilities?",
    options: [
      "FAA",
      "DHS and DOD (under specific legal authorities)",
      "FCC",
      "TSA",
    ],
    correctAnswer: 1,
    explanation:
      "Under current US law, DHS and DOD have limited legal authority to track, disrupt, and destroy rogue UAS threatening federal facilities. FAA manages airspace but lacks enforcement tools.",
  },
  {
    id: 32,
    category: "C-UAS",
    question: "What is RF fingerprinting in C-UAS detection?",
    options: [
      "Using radio frequency to scan for physical fingerprints on drones",
      "Identifying a specific drone by its unique RF emission characteristics",
      "A method to encode drone registration data in RF signals",
      "Measuring the RF absorption of drone materials",
    ],
    correctAnswer: 1,
    explanation:
      "RF fingerprinting identifies drones by analyzing unique characteristics of their RF emissions (frequency stability, modulation quirks, timing patterns) that differ between individual devices.",
  },
  {
    id: 33,
    category: "C-UAS",
    question: "What type of laser-based C-UAS system has been operationally demonstrated against drone threats?",
    options: [
      "Photon torpedoes",
      "High-Energy Laser (HEL) directed energy weapons",
      "Lidar mapping lasers repurposed as weapons",
      "Laser range finders with explosive tips",
    ],
    correctAnswer: 1,
    explanation:
      "High-Energy Laser (HEL) directed energy weapons have been demonstrated against drone targets. Systems like the US Army's MEHEL and similar programs have successfully shot down UAS.",
  },
  {
    id: 34,
    category: "C-UAS",
    question: "Why is detecting small commercial drones with traditional air defense radar particularly challenging?",
    options: [
      "Drones are made of radar-absorbing materials",
      "Small drones have a very small radar cross section (RCS), similar to birds",
      "Drones operate only at night",
      "Commercial drones emit countermeasure signals",
    ],
    correctAnswer: 1,
    explanation:
      "Small consumer drones have a very small radar cross section (RCS), making them difficult to distinguish from birds or other clutter on traditional air defense radars.",
  },
  {
    id: 35,
    category: "C-UAS",
    question: "What is 'command link takeover' in C-UAS?",
    options: [
      "Physically seizing the drone operator's controller",
      "Intercepting and assuming control of a hostile drone's control link",
      "Crashing the drone by overloading its command processor",
      "Using a drone to steal the target drone's antenna",
    ],
    correctAnswer: 1,
    explanation:
      "Command link takeover (cyber hijacking) involves intercepting and then transmitting commands on the drone's control frequency to assume control — a sophisticated C-UAS technique.",
  },
  {
    id: 36,
    category: "C-UAS",
    question: "What does 'detect, identify, track, neutralize' (DITN) describe in C-UAS?",
    options: [
      "The lifecycle of drone manufacturing",
      "The four sequential steps in a C-UAS engagement sequence",
      "A type of surveillance drone mission profile",
      "The process of registering drones with the FAA",
    ],
    correctAnswer: 1,
    explanation:
      "DITN describes the C-UAS engagement sequence: first Detect the threat, Identify whether it is hostile, Track its movement and intent, then Neutralize it using appropriate countermeasures.",
  },
  {
    id: 37,
    category: "C-UAS",
    question: "Which environment presents the greatest challenge for C-UAS radar systems due to signal clutter?",
    options: [
      "Open ocean",
      "Desert terrain",
      "Urban environments with dense infrastructure",
      "High altitude operations",
    ],
    correctAnswer: 2,
    explanation:
      "Urban environments create extreme radar clutter from buildings, vehicles, and other objects. This clutter masks small drone returns and makes detection and tracking significantly harder.",
  },
  {
    id: 38,
    category: "C-UAS",
    question: "What is a 'kamikaze drone' and why is it particularly relevant to C-UAS?",
    options: [
      "A drone that photographs targets before returning to base",
      "A one-way loitering munition that destroys itself and the target on impact",
      "A surveillance drone resistant to jamming",
      "A drone controlled by an autonomous AI system",
    ],
    correctAnswer: 1,
    explanation:
      "Kamikaze drones (loitering munitions) are one-way weapons that orbit a target area before diving to impact. Their autonomous final attack makes them harder to jam and presents unique C-UAS challenges.",
  },
  {
    id: 39,
    category: "C-UAS",
    question: "What role does AI/machine learning play in modern C-UAS systems?",
    options: [
      "AI is not currently used in C-UAS systems",
      "AI helps automatically classify, track, and prioritize drone threats from sensor data",
      "AI is only used for launching counter-drones",
      "AI manages paperwork and reporting for C-UAS operations",
    ],
    correctAnswer: 1,
    explanation:
      "AI and ML algorithms process sensor fusion data to automatically classify objects as drones vs. birds, track multiple threats simultaneously, assess threat levels, and recommend responses.",
  },
  {
    id: 40,
    category: "C-UAS",
    question: "What is the main advantage of using multiple sensor types (sensor fusion) in a C-UAS system?",
    options: [
      "It reduces the cost of the system",
      "Each sensor type compensates for the limitations of others, improving overall detection reliability",
      "Multiple sensors allow the system to control drones remotely",
      "Sensor fusion eliminates the need for human operators",
    ],
    correctAnswer: 1,
    explanation:
      "Sensor fusion combines radar, RF, optical, and acoustic data so each sensor type compensates for weaknesses in others — radar finds range, RF identifies protocol, optics confirm visually — greatly improving accuracy and reducing false alarms.",
  },
];

export function getQuestions(category: "UAS" | "C-UAS", count: number): Question[] {
  const pool = questions.filter((q) => q.category === category);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
