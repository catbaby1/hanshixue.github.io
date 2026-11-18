(() => {
  const root = document.documentElement;
  const body = document.body;
  const page = body.dataset.page || 'home';

  const dict = {
    'nav.home': { zh: '首页', en: 'Home' },
    'nav.products': { zh: '产品中心', en: 'Products' },
    'nav.about': { zh: '关于我们', en: 'About' },
    'nav.contact': { zh: '联系我们', en: 'Contact' },
    'nav.inquiry': { zh: '快速咨询', en: 'Enquire' },
    'nav.dropdownLabel': { zh: '四大产品形态', en: 'Four product forms' },
    'nav.dropdownNote': { zh: '点击进入产品中心并快速定位', en: 'Open a product form in the catalogue' },
    'nav.allProducts': { zh: '查看全部产品', en: 'View all products' },
    'product.module.title': { zh: '功放模块', en: 'RF Power Modules' },
    'product.module.short': { zh: '紧凑型宽带功率放大模块', en: 'Compact wideband power amplifiers' },
    'product.chassis.title': { zh: '功放机箱', en: 'RF Power Chassis' },
    'product.chassis.short': { zh: '标准机架式独立部署平台', en: 'Rack-mount amplifier platforms' },
    'product.cabinet.title': { zh: '功放机柜', en: 'RF Power Cabinets' },
    'product.cabinet.short': { zh: '多通道系统级功率放大平台', en: 'Multi-channel system-level platforms' },
    'product.lna.title': { zh: '低噪放模块', en: 'Low Noise Amplifiers' },
    'product.lna.short': { zh: '高增益宽带低噪声接收前端', en: 'High-gain wideband receive front-ends' },
    'common.learnMore': { zh: '了解更多', en: 'Learn more' },
    'common.viewModels': { zh: '查看型号', en: 'View models' },
    'common.consult': { zh: '项目咨询', en: 'Discuss a project' },
    'common.contactUs': { zh: '联系我们', en: 'Contact us' },
    'common.manager': { zh: '林经理', en: 'Manager Lin' },
    'common.phone': { zh: '电话', en: 'Phone' },
    'common.email': { zh: '邮箱', en: 'Email' },
    'common.wechat': { zh: '微信同号', en: 'Phone / WeChat' },
    'common.consultModel': { zh: '咨询此型号', en: 'Enquire this model' },
    'common.models': { zh: '个常用型号', en: 'model configurations' },
    'common.showing': { zh: '显示', en: 'Showing' },
    'common.frequency': { zh: '频率', en: 'Frequency' },
    'common.power': { zh: '功率', en: 'Power' },
    'common.gain': { zh: '增益', en: 'Gain' },
    'common.noise': { zh: '噪声系数', en: 'Noise figure' },
    'common.outputPower': { zh: '输出功率', en: 'Output power' },
    'common.noResults': { zh: '没有找到匹配型号，请尝试其他关键词。', en: 'No matching models. Try another keyword.' },
    'common.clearSearch': { zh: '清除搜索', en: 'Clear search' },
    'common.searchPlaceholder': { zh: '搜索型号、频段或功率…', en: 'Search model, frequency or power…' },
    'feature.compact': { zh: '紧凑结构', en: 'Compact format' },
    'feature.thermal': { zh: '导热底板', en: 'Thermal baseplate' },
    'feature.flexInterface': { zh: '灵活接口', en: 'Flexible interfaces' },
    'feature.protection': { zh: '多重保护', en: 'Multi-layer protection' },
    'feature.rack': { zh: '19 英寸机架', en: '19-inch rack' },
    'feature.power': { zh: '50 W–1000 W', en: '50 W–1000 W' },
    'feature.monitor': { zh: '状态监测', en: 'Status monitoring' },
    'feature.remote': { zh: 'RS485 / LAN', en: 'RS485 / LAN' },
    'feature.multichannel': { zh: '多通道放大', en: 'Multi-channel' },
    'feature.combine': { zh: '功率合成', en: 'Power combining' },
    'feature.central': { zh: '集中监控', en: 'Central control' },
    'feature.custom': { zh: '项目化配置', en: 'Project configured' },
    'feature.lowNoise': { zh: '低噪声系数', en: 'Low noise figure' },
    'feature.highGain': { zh: '高增益', en: 'High gain' },
    'feature.wideband': { zh: '宽带覆盖', en: 'Wideband' },
    'feature.configurable': { zh: '可配置接口', en: 'Configurable I/O' },
    'footer.desc': { zh: '聚焦宽带射频功率放大、低噪声接收与系统级集成，为雷达、通信、电子对抗与测试测量提供可配置、可交付的工程化产品。', en: 'Wideband RF power amplification, low-noise reception and system integration for radar, communications, electronic warfare and test & measurement.' },
    'footer.products': { zh: '产品中心', en: 'Products' },
    'footer.company': { zh: '公司信息', en: 'Company' },
    'footer.contact': { zh: '联系工程师', en: 'Talk to engineering' },
    'footer.website': { zh: '官方网站', en: 'Website' },
    'theme.toLight': { zh: '切换到浅色主题', en: 'Switch to light theme' },
    'theme.toDark': { zh: '切换到深色主题', en: 'Switch to dark theme' },
    'menu.open': { zh: '打开导航菜单', en: 'Open navigation menu' },
    'menu.close': { zh: '关闭导航菜单', en: 'Close navigation menu' },

    'home.eyebrow': { zh: 'WIDEBAND RF POWER / 80 MHz–40 GHz', en: 'WIDEBAND RF POWER / 80 MHz–40 GHz' },
    'home.title1': { zh: '驱动射频边界', en: 'Engineer the RF frontier' },
    'home.title2': { zh: '释放每一瓦功率', en: 'Unlock every watt' },
    'home.description': { zh: '志远同创聚焦 80 MHz–40 GHz 宽带射频功率放大、低噪声接收与系统级集成，以模块、机箱、机柜和低噪放四大产品形态，为复杂射频系统提供可配置、可交付的工程能力。', en: 'ZYPA focuses on 80 MHz–40 GHz wideband RF power amplification, low-noise reception and system integration. Our modules, chassis, cabinets and LNAs give complex RF systems a configurable, deliverable engineering path.' },
    'home.ctaProducts': { zh: '探索四大产品', en: 'Explore product forms' },
    'home.ctaContact': { zh: '联系工程师', en: 'Discuss your project' },
    'home.chip1': { zh: '模块 / 机箱 / 机柜', en: 'MODULE / CHASSIS / CABINET' },
    'home.chip2': { zh: '收发链路协同', en: 'TX / RX CHAIN' },
    'home.chip3': { zh: '按项目定制', en: 'PROJECT CONFIGURED' },
    'home.float1Label': { zh: '频率覆盖', en: 'FREQUENCY COVERAGE' },
    'home.float2Label': { zh: '产品形态', en: 'PRODUCT FORMS' },
    'home.metric1Label': { zh: '宽带射频频率覆盖', en: 'Wideband RF coverage' },
    'home.metric2Label': { zh: '模块至机柜功率覆盖', en: 'Module-to-cabinet power range' },
    'home.metric3Label': { zh: '完整产品系列', en: 'Integrated product families' },
    'home.metric4Label': { zh: '资深射频工程师共同创立', en: 'Founded by senior RF engineers' },
    'home.productsEyebrow': { zh: '01 / PRODUCT PORTFOLIO', en: '01 / PRODUCT PORTFOLIO' },
    'home.productsTitle1': { zh: '四大产品类型', en: 'Four product forms' },
    'home.productsTitle2': { zh: '覆盖完整射频链路', en: 'Across the complete RF chain' },
    'home.productsIntro': { zh: '从发射链路的核心放大模块，到机架式整机与多通道机柜，再到低噪声接收前端。产品可独立供货，也可按系统架构组合，形成从部件到整机的完整配套。', en: 'From core amplifier modules and rack systems to multi-channel cabinets and low-noise receive front-ends, each product can be supplied independently or combined around your system architecture.' },
    'home.moduleKicker': { zh: 'COMPACT / WIDEBAND / POWER DENSE', en: 'COMPACT / WIDEBAND / POWER DENSE' },
    'home.moduleDesc': { zh: '小体积、高功率密度的宽带功放模块。支持频段、功率、增益与接口配置，便于嵌入雷达前端、通信发射设备和测试系统。', en: 'Compact, power-dense wideband amplifier modules with configurable frequency, power, gain and interfaces for radar front-ends, transmitters and test systems.' },
    'home.chassisKicker': { zh: 'RACK MOUNT / READY TO DEPLOY', en: 'RACK MOUNT / READY TO DEPLOY' },
    'home.chassisDesc': { zh: '将功放模块、功率合成、电源、监控与散热集成于 2U / 3U / 4U 标准机架，面向独立部署、系统联调和长期连续运行。', en: 'Amplifier modules, power combining, supply, monitoring and cooling integrated into 2U / 3U / 4U racks for standalone use and long-term operation.' },
    'home.cabinetKicker': { zh: 'MULTI-CHANNEL / SYSTEM LEVEL', en: 'MULTI-CHANNEL / SYSTEM LEVEL' },
    'home.cabinetDesc': { zh: '面向多通道、多频段和集中式系统，实现机柜级功率放大、配电、散热、监控与射频分配/合成。', en: 'Cabinet-level amplification, power distribution, cooling, monitoring and RF combining for multi-channel and multi-band systems.' },
    'home.lnaKicker': { zh: 'LOW NOISE / HIGH GAIN / RECEIVE FRONT-END', en: 'LOW NOISE / HIGH GAIN / RECEIVE FRONT-END' },
    'home.lnaDesc': { zh: '面向微弱信号接收链路，提供低噪声、高增益、宽带低噪放模块，适用于雷达接收、通信前端与微弱信号侦测。', en: 'Low-noise, high-gain wideband LNAs for weak-signal reception, radar receivers, communication front-ends and signal detection.' },
    'home.capEyebrow': { zh: '02 / ENGINEERING APPROACH', en: '02 / ENGINEERING APPROACH' },
    'home.capTitle1': { zh: '指标之外，', en: 'Beyond datasheets,' },
    'home.capTitle2': { zh: '更关注系统协同', en: 'we engineer the system' },
    'home.capCopy': { zh: '真实的射频系统，难点往往发生在频段、功率、热管理、控制与结构交汇的地方。志远同创把可配置能力做成可验证、可集成、可交付的工程产品。', en: 'Real RF systems are won where bandwidth, power, thermal design, control and mechanical form intersect. ZYPA turns configurable capability into verified, integrable and deliverable engineering products.' },
    'about.capCopy': { zh: '真实的射频系统，难点往往发生在频段、功率、热管理、控制与结构交汇的地方。志远同创把可配置能力做成可验证、可集成、可交付的工程产品。', en: 'Real RF systems are won where bandwidth, power, thermal design, control and mechanical form intersect. ZYPA turns configurable capability into verified, integrable and deliverable engineering products.' },
    'home.capLink': { zh: '了解志远同创', en: 'About ZYPA' },
    'home.capVisualTitle': { zh: '从核心模块，到完整系统', en: 'From core module to complete system' },
    'home.capVisualDesc': { zh: '以统一工程方法协调射频源、功放模块、功率合成、控制、电源与散热，让不同产品形态之间可以平滑升级与组合。', en: 'A unified engineering method coordinates RF sources, modules, combining, control, power and cooling, enabling smooth upgrades across product forms.' },
    'home.cap1Title': { zh: '宽带功率架构', en: 'Wideband power architecture' },
    'home.cap1Desc': { zh: '围绕 80 MHz–40 GHz 常用频段，在带宽、增益、效率、线性度与可靠性之间进行系统平衡。', en: 'Balancing bandwidth, gain, efficiency, linearity and reliability across 80 MHz–40 GHz.' },
    'home.cap2Title': { zh: '热设计与可靠性', en: 'Thermal and reliability design' },
    'home.cap2Desc': { zh: '从导热底板到风冷与冷板方案，围绕连续运行和复杂环境进行结构与热管理设计。', en: 'From baseplate conduction to forced-air and cold-plate cooling for continuous operation.' },
    'home.cap3Title': { zh: '监控与控制', en: 'Monitoring and control' },
    'home.cap3Desc': { zh: '支持功率、温度、驻波和告警状态监测，以及 RS485、LAN 等本地与远程控制方式。', en: 'Power, temperature, VSWR and alarm monitoring with local or remote RS485 / LAN control.' },
    'home.cap4Title': { zh: '项目化工程适配', en: 'Project-level adaptation' },
    'home.cap4Desc': { zh: '频段、功率、接口、供电、散热与结构按项目配置，覆盖原理样机、系统联调和批量交付。', en: 'Frequency, power, I/O, supply, cooling and mechanics configured for prototypes, integration and volume delivery.' },
    'home.app1': { zh: '雷达系统', en: 'Radar systems' },
    'home.app2': { zh: '通信链路', en: 'Communication links' },
    'home.app3': { zh: '电子对抗', en: 'Electronic warfare' },
    'home.app4': { zh: '测试测量', en: 'Test & measurement' },
    'home.app5': { zh: '低空安防', en: 'Low-altitude security' },
    'home.app6': { zh: '科研平台', en: 'Research platforms' },

    'products.eyebrow': { zh: 'PRODUCT CENTER / MODEL MATRIX', en: 'PRODUCT CENTER / MODEL MATRIX' },
    'products.title1': { zh: '产品中心', en: 'Product Center' },
    'products.title2': { zh: '从型号到系统，快速定位', en: 'Find the right model, then scale to a system' },
    'products.intro': { zh: '四大产品形态、58 个常用型号配置。按频段、功率和结构快速筛选，也可直接联系工程团队获取选型建议。', en: 'Four product forms and 58 commonly configured models. Search by frequency, power or form factor, or speak directly with our engineering team.' },
    'products.stat1': { zh: '产品形态', en: 'Product forms' },
    'products.stat2': { zh: '常用型号', en: 'Model configurations' },
    'products.stat3': { zh: '频率覆盖', en: 'Frequency range' },
    'products.sidebarLabel': { zh: 'PRODUCT FORMS / 产品形态', en: 'PRODUCT FORMS / CATALOGUE' },
    'products.sidebarNoteTitle': { zh: '需要定制型号？', en: 'Need a custom configuration?' },
    'products.sidebarNote': { zh: '频段、功率、增益、接口、供电与结构均可按项目重新组合。', en: 'Frequency, power, gain, I/O, supply and mechanics can all be reconfigured for your project.' },
    'products.catalogMeta': { zh: '常用型号库 / 以规格书为准', en: 'COMMON MODEL LIBRARY / REFER TO DATASHEET' },
    'products.chapterModule': { zh: '面向发射链路嵌入应用，提供紧凑型、高功率密度宽带功放模块。标准化接口与模块化结构便于快速评估、集成和批量部署。', en: 'Compact, power-dense wideband amplifier modules for embedded transmit chains. Standardized interfaces and modular mechanics simplify evaluation, integration and volume deployment.' },
    'products.chapterChassis': { zh: '将功放模块、功率合成、电源、监控与散热系统集成于 19 英寸标准机架，面向独立部署、系统联调和长期连续运行。', en: 'Amplifier modules, combining, power, monitoring and cooling integrated into a 19-inch chassis for standalone deployment, integration and continuous operation.' },
    'products.chapterCabinet': { zh: '面向多通道、多频段和集中式系统，集成机柜级功率放大、配电、散热、监控及射频分配与合成能力。', en: 'Cabinet-level amplification, power distribution, cooling, monitoring and RF combining for multi-channel, multi-band and centralized systems.' },
    'products.chapterLna': { zh: '面向微弱信号接收链路，提供低噪声、高增益、宽带低噪放模块，可按项目配置接口、供电与监测方式。', en: 'Low-noise, high-gain wideband LNAs for weak-signal receive chains, with configurable interfaces, power and monitoring.' },
    'products.modelTitle': { zh: '可选型号 / MODEL MATRIX', en: 'AVAILABLE MODELS / MODEL MATRIX' },
    'products.modelNote': { zh: '以上为常用配置，具体指标以对应产品规格书为准。支持按项目定制频段、功率、增益、接口、供电与结构。', en: 'Common configurations shown. Refer to the datasheet for final specifications. Frequency, power, gain, I/O, power supply and mechanics can be customized.' },

    'about.eyebrow': { zh: 'ABOUT ZYPA / ENGINEERING COMPANY', en: 'ABOUT ZYPA / ENGINEERING COMPANY' },
    'about.title1': { zh: '由工程师创立，', en: 'Founded by engineers,' },
    'about.title2': { zh: '为复杂射频系统而生', en: 'built for complex RF systems' },
    'about.intro': { zh: '志远同创由三位资深射频工程师共同创立。我们长期深耕宽带功率放大器、低噪声接收、功率合成、热设计与系统集成，坚持用工程方法解决真实系统中的问题。', en: 'ZYPA was founded by three senior RF engineers. Our experience spans wideband power amplifiers, low-noise reception, power combining, thermal design and system integration. We solve real system problems with disciplined engineering.' },
    'about.visual1': { zh: '资深射频工程师', en: 'SENIOR RF ENGINEERS' },
    'about.visual2': { zh: '从芯片到系统', en: 'COMPONENT TO SYSTEM' },
    'about.visual3': { zh: '长期工程陪跑', en: 'LONG-TERM SUPPORT' },
    'about.stat1Label': { zh: '创始工程师', en: 'Founding engineers' },
    'about.stat2Label': { zh: '宽带频率覆盖', en: 'Wideband coverage' },
    'about.stat3Label': { zh: '产品形态', en: 'Product forms' },
    'about.stat4Label': { zh: '工程响应方式', en: 'Engineering response' },
    'about.storyEyebrow': { zh: '01 / WHO WE ARE', en: '01 / WHO WE ARE' },
    'about.storyTitle1': { zh: '把多年射频经验，', en: 'Turning years of RF experience' },
    'about.storyTitle2': { zh: '沉淀成可交付的产品', en: 'into deliverable products' },
    'about.storyP1': { zh: '志远同创是一家由三位资深射频工程师共同创立的工程型公司。创始团队长期从事宽带功率放大器、功放模块、机架式功放、机柜级功率合成以及低噪声接收前端的研发与工程化工作，经历了从方案论证、原理样机、指标验证到系统联调和批量交付的完整过程。', en: 'ZYPA is an engineering-led company founded by three senior RF engineers. The founding team has worked across wideband power amplifiers, amplifier modules, rack systems, cabinet-level power combining and low-noise receive front-ends, from concept and prototyping to validation, system integration and volume delivery.' },
    'about.storyP2': { zh: '我们熟悉射频系统真正落地时会遇到的问题：宽带匹配如何在全频段保持稳定，高功率密度如何与散热和结构协同，多通道合成如何控制幅相一致性，功放与低噪放如何在同一链路中平衡噪声、增益、动态范围和可靠性。这些问题往往无法靠单个器件指标解决，而需要系统级判断。', en: 'We understand the problems that appear when an RF design meets reality: keeping wideband matching stable, coordinating high power density with cooling and mechanics, preserving amplitude and phase consistency in combining networks, and balancing noise, gain, dynamic range and reliability across transmit and receive chains. These are system-level problems, not component-level ones.' },
    'about.storyP3': { zh: '因此，我们把产品设计建立在可配置、可验证、可维护的架构之上。模块、机箱、机柜与低噪放系列共享统一的工程方法和接口逻辑，可以根据客户的频段、功率、结构和使用环境进行组合，而不是让客户适应单一标准产品。', en: 'That is why our products are built on configurable, verifiable and maintainable architectures. Modules, chassis, cabinets and LNAs share a common engineering method and interface philosophy, allowing them to be combined around your frequency, power, packaging and operating environment.' },
    'about.storyP4': { zh: '我们相信，一家射频工程公司的价值不仅是提供一只功放或一套机柜，更是帮助客户缩短选型周期、降低集成风险、减少系统联调反复，并在产品全生命周期内持续提供工程支持。', en: 'The value of an RF engineering company is not only the amplifier or cabinet itself. It is helping customers shorten selection, reduce integration risk, avoid repeated system tuning and receive engineering support throughout the product lifecycle.' },
    'about.quote': { zh: '“把复杂的射频问题拆解清楚，把可交付的工程边界定义清楚，再用产品去兑现它。”', en: '“Understand the RF problem clearly, define the engineering boundary honestly, then deliver a product that proves it.”' },
    'about.principlesEyebrow': { zh: '02 / WHAT WE VALUE', en: '02 / WHAT WE VALUE' },
    'about.principlesTitle1': { zh: '我们的工程原则', en: 'Our engineering principles' },
    'about.principlesTitle2': { zh: '决定产品能走多远', en: 'define how far a product can go' },
    'about.principle1Title': { zh: '工程经验', en: 'Engineering experience' },
    'about.principle1Desc': { zh: '从器件选型、匹配网络、功率合成到热设计和结构协同，用真实项目经验识别关键风险，而不是只停留在仿真和参数表。', en: 'From device selection and matching to combining, thermal design and mechanics, we use real project experience to identify critical risks beyond simulations and datasheets.' },
    'about.principle2Title': { zh: '系统思维', en: 'System thinking' },
    'about.principle2Desc': { zh: '功放不是孤立部件。我们同时关注电源、控制、散热、接口、线缆、驻波与使用环境，让产品在系统中稳定工作。', en: 'An amplifier is never isolated. We consider power, control, cooling, interfaces, cabling, VSWR and the operating environment so the product performs in the system.' },
    'about.principle3Title': { zh: '长期主义', en: 'Long-term commitment' },
    'about.principle3Desc': { zh: '从样机验证到批量交付，从单台设备到后续扩展，我们希望成为客户长期可依赖的射频工程伙伴。', en: 'From prototyping to volume delivery and from a single unit to future expansion, we aim to be a dependable long-term RF engineering partner.' },
    'about.processEyebrow': { zh: '03 / HOW WE WORK', en: '03 / HOW WE WORK' },
    'about.processTitle1': { zh: '从需求定义到交付', en: 'From requirement to delivery' },
    'about.processTitle2': { zh: '每一步都围绕可验证结果', en: 'Every step tied to a verifiable result' },
    'about.step1Title': { zh: '需求定义', en: 'Requirement definition' },
    'about.step1Desc': { zh: '明确频段、输出功率、信号体制、驻波条件、散热边界、结构接口和交付节点，把模糊需求变成工程约束。', en: 'Define frequency, output power, waveform, VSWR, thermal limits, interfaces and delivery milestones, turning broad requirements into engineering constraints.' },
    'about.step2Title': { zh: '架构与验证', en: 'Architecture & validation' },
    'about.step2Desc': { zh: '围绕放大链路、合成网络、电源、监控和热设计进行指标分解，通过样机测试验证关键性能与边界条件。', en: 'Decompose requirements across the RF chain, combining, power, monitoring and thermal design, then validate key performance and boundaries on prototypes.' },
    'about.step3Title': { zh: '联调与交付', en: 'Integration & delivery' },
    'about.step3Desc': { zh: '提供接口匹配、系统联调、工程文档与交付支持，确保产品可集成、可维护、可扩展。', en: 'Support interface matching, system integration, documentation and delivery so the product is integrable, maintainable and scalable.' },
    'about.ctaTitle1': { zh: '让工程师直接参与', en: 'Put an engineer in the conversation' },
    'about.ctaTitle2': { zh: '你的下一次射频系统设计', en: 'from the very first requirement' },
    'about.ctaCopy': { zh: '告诉我们频段、功率和应用场景，我们会从系统角度给出选型与定制建议。', en: 'Share your frequency, power and application. We will respond with a system-level selection or customization recommendation.' },

    'contact.eyebrow': { zh: 'CONTACT / TALK TO ENGINEERING', en: 'CONTACT / TALK TO ENGINEERING' },
    'contact.title1': { zh: '让需求，', en: 'Talk directly' },
    'contact.title2': { zh: '直接找到工程师', en: 'to an RF engineer' },
    'contact.intro': { zh: '无论是标准型号选型、样机验证，还是多通道机柜与低噪放定制，都可以通过电话或邮件联系我们。告诉我们应用场景，我们会从射频链路的角度给出建议。', en: 'For standard model selection, prototype validation, multi-channel cabinets or custom LNAs, contact us by phone or email. Share your application and we will respond from an RF-chain perspective.' },
    'contact.phoneLabel': { zh: 'PHONE / 电话 · 微信同号', en: 'PHONE / WECHAT' },
    'contact.phoneSub': { zh: '林经理 · 项目与选型咨询', en: 'Manager Lin · projects and selection' },
    'contact.emailLabel': { zh: 'EMAIL / 邮箱', en: 'EMAIL' },
    'contact.emailSub': { zh: '发送需求、图纸或规格说明', en: 'Send requirements, drawings or specifications' },
    'contact.addressLabel': { zh: 'ADDRESS / 地址', en: 'ADDRESS' },
    'contact.address': { zh: '四川省成都市高新西区汇都科技总部园一期4栋6楼412-2', en: 'Room 412-2, 6F, Building 4, Phase I, Huidu Technology Headquarters Park, High-tech West District, Chengdu, Sichuan, China' },
    'contact.addressSub': { zh: '到访前请联系林经理确认', en: 'Please confirm your visit with Manager Lin in advance' },
    'contact.copy': { zh: '复制', en: 'COPY' },
    'contact.copied': { zh: '已复制到剪贴板', en: 'Copied to clipboard' },
    'contact.formEyebrow': { zh: 'PROJECT BRIEF / 项目信息', en: 'PROJECT BRIEF' },
    'contact.formTitle1': { zh: '告诉我们你的项目', en: 'Tell us about your project' },
    'contact.formTitle2': { zh: '工程师会更快理解需求', en: 'and help engineering respond faster' },
    'contact.helpCopy': { zh: '提交表单后会打开你的邮件客户端，并自动填写收件人、主题和项目信息。也可以直接通过电话或邮箱联系林经理。', en: 'Submitting opens your email client with the recipient, subject and project details pre-filled. You can also call or email Manager Lin directly.' },
    'contact.tip1': { zh: '工作频段与瞬时带宽', en: 'Operating band and instantaneous bandwidth' },
    'contact.tip2': { zh: '输出功率、增益与信号体制', en: 'Output power, gain and signal format' },
    'contact.tip3': { zh: '供电、接口、结构与散热边界', en: 'Power, I/O, mechanics and thermal limits' },
    'contact.tip4': { zh: '应用场景、数量与交付时间', en: 'Application, quantity and delivery schedule' },
    'contact.formHeading': { zh: '项目咨询表', en: 'Project enquiry' },
    'contact.formSub': { zh: '填写后自动生成邮件内容，不会上传到服务器。', en: 'Your details are prepared as an email and are not uploaded to a server.' },
    'contact.name': { zh: '您的称呼', en: 'Your name' },
    'contact.company': { zh: '公司名称', en: 'Company' },
    'contact.contactInfo': { zh: '联系方式', en: 'Contact' },
    'contact.direction': { zh: '项目方向', en: 'Product direction' },
    'contact.directionPlaceholder': { zh: '请选择项目方向', en: 'Select a product direction' },
    'contact.direction1': { zh: '功放模块', en: 'RF power module' },
    'contact.direction2': { zh: '功放机箱', en: 'RF power chassis' },
    'contact.direction3': { zh: '功放机柜', en: 'RF power cabinet' },
    'contact.direction4': { zh: '低噪放模块', en: 'Low noise amplifier' },
    'contact.direction5': { zh: '系统集成与定制', en: 'System integration / custom' },
    'contact.message': { zh: '需求说明', en: 'Project details' },
    'contact.messagePlaceholder': { zh: '请描述频段、功率、应用、结构与交付要求…', en: 'Frequency, power, application, mechanics and delivery requirements…' },
    'contact.submit': { zh: '生成咨询邮件', en: 'Prepare enquiry email' },
    'contact.note': { zh: '提交后将打开本机邮件客户端；正式自动化收件需接入企业邮箱或表单服务。', en: 'This opens your local email client. Automated form handling requires a business mailbox or backend form service.' },
    'contact.mailOpening': { zh: '正在打开邮件客户端，请确认收件人与邮件内容。', en: 'Opening your email client. Please confirm the recipient and message.' },
    'contact.ctaTitle1': { zh: '准备好一次有结果的沟通', en: 'Make the next conversation count' },
    'contact.ctaTitle2': { zh: '就从一个频段开始', en: 'Start with a frequency band' },
    'contact.ctaCopy': { zh: '电话、邮件或项目表单，都会直接进入工程沟通，不需要经过复杂流程。', en: 'Phone, email or project brief all lead directly to an engineering discussion.' }
  };

  const pageTitles = {
    home: { zh: '志远同创 ZYPA RF POWER | 宽带射频功率放大器', en: 'ZYPA RF POWER | Wideband RF Power Amplifiers' },
    products: { zh: '产品中心 | 志远同创 ZYPA RF POWER', en: 'Product Center | ZYPA RF POWER' },
    about: { zh: '关于我们 | 志远同创 ZYPA RF POWER', en: 'About ZYPA | ZYPA RF POWER' },
    contact: { zh: '联系我们 | 志远同创 ZYPA RF POWER', en: 'Contact | ZYPA RF POWER' }
  };

  const models = {
    module: [
      ['ZYPA500M3G100W-MK', '0.5–3 GHz', '100 W', '50 dB'],
      ['ZYPA700M6G50W-MK', '0.7–6 GHz', '50 W', '48 dB'],
      ['ZYPA1G6G50W-MK', '1–6 GHz', '50 W', '48 dB'],
      ['ZYPA1G6G100W-MK', '1–6 GHz', '100 W', '50 dB'],
      ['ZYPA2400M2500M500W-MK', '2.4–2.5 GHz', '500 W', '55 dB'],
      ['ZYPA2G6G50W-MK', '2–6 GHz', '50 W', '48 dB'],
      ['ZYPA2G6G100W-MK', '2–6 GHz', '100 W', '50 dB'],
      ['ZYPA2G8G50W-MK', '2–8 GHz', '50 W', '48 dB'],
      ['ZYPA2G18G50W-MK', '2–18 GHz', '50 W', '48 dB'],
      ['ZYPA5700M5900M200W-MK', '5.7–5.9 GHz', '200 W', '53 dB'],
      ['ZYPA6G18G50W-MK', '6–18 GHz', '50 W', '48 dB'],
      ['ZYPA8G12G100W-MK', '8–12 GHz', '100 W', '50 dB'],
      ['ZYPA13G14500M300W-MK', '13–14.5 GHz', '300 W', '55 dB'],
      ['ZYPA18G26500M50W-MK', '18–26.5 GHz', '50 W', '48 dB'],
      ['ZYPA18G40G50W-MK', '18–40 GHz', '50 W', '48 dB'],
      ['ZYPA26500M40G50W-MK', '26.5–40 GHz', '50 W', '50 dB']
    ],
    chassis: [
      ['ZYPA500M3G200W-JX', '0.5–3 GHz', '200 W', '50 dB'],
      ['ZYPA700M6G50W-JX', '0.7–6 GHz', '50 W', '48 dB'],
      ['ZYPA1G6G200W-JX', '0.7–6 GHz', '200 W', '53 dB'],
      ['ZYPA700M6G500W-JX', '0.7–6 GHz', '500 W', '55 dB'],
      ['ZYPA2400M2500M500W-JX', '2.4–2.5 GHz', '500 W', '55 dB'],
      ['ZYPA2G6G200W-JX', '2–6 GHz', '200 W', '53 dB'],
      ['ZYPA2G6G300W-JX', '2–6 GHz', '300 W', '55 dB'],
      ['ZYPA2G8G100W-JX', '2–8 GHz', '100 W', '50 dB'],
      ['ZYPA2G18G50W-JX', '2–18 GHz', '50 W', '48 dB'],
      ['ZYPA5700M5900M200W-JX', '5.7–5.9 GHz', '200 W', '53 dB'],
      ['ZYPA6G18G50W-JX', '6–18 GHz', '50 W', '48 dB'],
      ['ZYPA6G18G200W-JX', '6–18 GHz', '200 W', '53 dB'],
      ['ZYPA13G14500M300W-JX', '13–14.5 GHz', '300 W', '55 dB'],
      ['ZYPA18G26500M100W-JX', '18–26.5 GHz', '100 W', '50 dB'],
      ['ZYPA18G40G100W-JX', '18–40 GHz', '100 W', '50 dB'],
      ['ZYPA26500M40G100W-JX', '26.5–40 GHz', '100 W', '50 dB']
    ],
    cabinet: [
      ['ZYPA80M1G1000W-JG', '0.08–1 GHz', '1000 W', '60 dB'],
      ['ZYPA500M3G100W-JG', '0.5–3 GHz', '1000 W', '60 dB'],
      ['ZYPA700M6G800W-JG', '0.7–6 GHz', '800 W', '60 dB'],
      ['ZYPA700M6G1000W-JG', '0.7–6 GHz', '1000 W', '60 dB'],
      ['ZYPA2G6G500W-JG', '2–6 GHz', '500 W', '55 dB'],
      ['ZYPA2G8G500W-JG', '2–8 GHz', '500 W', '55 dB'],
      ['ZYPA2G18G500W-JG', '2–18 GHz', '500 W', '55 dB'],
      ['ZYPA6G18G600W-JG', '6–18 GHz', '600 W', '56 dB'],
      ['ZYPA6G18G1000W-JG', '6–18 GHz', '1000 W', '60 dB'],
      ['ZYPA6G18G2000W-JG', '6–18 GHz', '2000 W', '63 dB'],
      ['ZYPA18G26500M500W-JG', '18–26.5 GHz', '500 W', '55 dB'],
      ['ZYPA26500M40G500W-JG', '26.5–40 GHz', '500 W', '55 dB']
    ],
    lna: [
      ['ZYLNA11G26G-5.5', '11–26 GHz', '5.5 dBm', '18 dB', '1.6 dB'],
      ['ZYLNA2G8G-10', '2–8 GHz', '10 dBm', '24 dB', '0.6 dB'],
      ['ZYLNA2G8G-17', '2–8 GHz', '17 dBm', '30 dB', '0.6 dB'],
      ['ZYLNA7G9G-17', '7–9 GHz', '17 dBm', '26 dB', '0.6 dB'],
      ['ZYLNA30M500M-20', '0.03–0.5 GHz', '20 dBm', '29 dB', '0.4 dB'],
      ['ZYLNA18G40G-14', '18–40 GHz', '14 dBm', '20 dB', '2.0 dB'],
      ['ZYLNA14G18G-0', '14–18 GHz', '0 dBm', '18 dB', '1.1 dB'],
      ['ZYLNA28G55G-15', '28–55 GHz', '15 dBm', '17 dB', '3.5 dB'],
      ['ZYLNA10G18G-4', '10–18 GHz', '4 dBm', '19 dB', '1.3 dB'],
      ['ZYLNA5G18G-11', '5–18 GHz', '11 dBm', '20 dB', '1.1 dB'],
      ['ZYLNA18G26G-0', '18–26 GHz', '0 dBm', '15 dB', '1.8 dB'],
      ['ZYLNA15G37G-8', '15–37 GHz', '8 dBm', '22 dB', '1.8 dB'],
      ['ZYLNA10M18G-13', '0.01–18 GHz', '13 dBm', '20 dB', '1.8 dB'],
      ['ZYLNA18G40G-10', '18–40 GHz', '10 dBm', '22 dB', '1.8 dB']
    ]
  };

  let lang = root.dataset.lang || 'zh';
  let theme = root.dataset.theme || 'dark';
  let toastTimer;

  const tr = (key) => {
    const item = dict[key];
    return item ? (item[lang] || item.zh) : key;
  };

  const setTheme = (next, persist) => {
    theme = next === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#050a12' : '#f3f6f8');
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.setAttribute('aria-label', theme === 'dark' ? tr('theme.toLight') : tr('theme.toDark'));
      button.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    }
    if (persist) {
      try { localStorage.setItem('zypa-theme', theme); } catch (error) {}
    }
  };

  const renderModels = () => {
    document.querySelectorAll('[data-model-list]').forEach((grid) => {
      const product = grid.dataset.modelList;
      const rows = models[product] || [];
      const isLna = product === 'lna';
      const cards = rows.map((row) => {
        const code = row[0];
        const freq = row[1];
        const output = row[2];
        const gain = row[3];
        const noise = row[4] || '';
        const subject = encodeURIComponent((lang === 'zh' ? '型号咨询：' : 'Model enquiry: ') + code);
        const search = row.join(' ').toLowerCase();
        const noiseBlock = isLna ? '<div><span>' + tr('common.noise') + '</span><strong>' + noise + '</strong></div>' : '';
        return '<article class="model-card" data-model-card data-search="' + search + '">' +
          '<div class="model-code">' + code + '</div>' +
          '<div class="model-specs' + (isLna ? ' lna' : '') + '">' +
            '<div><span>' + tr('common.frequency') + '</span><strong>' + freq + '</strong></div>' +
            '<div><span>' + tr(isLna ? 'common.outputPower' : 'common.power') + '</span><strong>' + output + '</strong></div>' +
            '<div><span>' + tr('common.gain') + '</span><strong>' + gain + '</strong></div>' +
            noiseBlock +
          '</div>' +
          '<a class="model-link" href="mailto:lwhwdmdc@gmail.com?subject=' + subject + '">' + tr('common.consultModel') + '</a>' +
        '</article>';
      }).join('');
      grid.innerHTML = cards;
      const section = grid.closest('.product-chapter');
      const count = document.querySelector('[data-count="' + product + '"]');
      if (count) count.textContent = String(rows.length);
      if (section) {
        const noResults = section.querySelector('.no-results');
        if (noResults) noResults.textContent = tr('common.noResults');
      }
    });
    updateModelFilter();
  };

  const updateModelFilter = () => {
    const input = document.querySelector('[data-model-search]');
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    const cards = document.querySelectorAll('[data-model-card]');
    let shown = 0;
    cards.forEach((card) => {
      const match = !query || (card.dataset.search || '').includes(query);
      card.hidden = !match;
      if (match) shown += 1;
    });
    document.querySelectorAll('.product-chapter').forEach((section) => {
      const hasVisible = Boolean(section.querySelector('[data-model-card]:not([hidden])'));
      const noResults = section.querySelector('.no-results');
      if (noResults) noResults.classList.toggle('visible', !hasVisible);
    });
    const result = document.querySelector('[data-model-result]');
    if (result) {
      result.textContent = query
        ? tr('common.showing') + ' ' + shown + ' / ' + cards.length + ' ' + tr('common.models')
        : cards.length + ' ' + tr('common.models');
    }
    const clear = document.querySelector('[data-search-clear]');
    if (clear) clear.hidden = !query;
  };

  const applyLanguage = (next, persist) => {
    lang = next === 'en' ? 'en' : 'zh';
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = tr(el.dataset.i18n);
      if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', tr(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', tr(el.dataset.i18nAria));
    });
    document.querySelectorAll('[data-set-lang]').forEach((button) => {
      const active = button.dataset.setLang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const pageTitle = pageTitles[page] || pageTitles.home;
    document.title = pageTitle[lang];
    if (persist) {
      try { localStorage.setItem('zypa-lang', lang); } catch (error) {}
    }
    setTheme(theme, false);
    renderModels();
  };

  const showToast = (message) => {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
  };

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.focus();
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      showToast(tr('contact.copied'));
    } catch (error) {
      showToast(text);
    }
  };

  const initHeader = () => {
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const productDropdown = document.querySelector('.has-dropdown');

    const setHeader = () => {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
    };
    setHeader();
    window.addEventListener('scroll', setHeader, { passive: true });

    if (menuButton && mobileMenu) {
      const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', lang === 'zh' ? '打开导航菜单' : 'Open navigation menu');
      };
      menuButton.addEventListener('click', () => {
        const open = !mobileMenu.classList.contains('is-open');
        mobileMenu.classList.toggle('is-open', open);
        body.classList.toggle('menu-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', lang === 'zh' ? (open ? '关闭导航菜单' : '打开导航菜单') : (open ? 'Close navigation menu' : 'Open navigation menu'));
      });
      mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
      window.addEventListener('resize', () => { if (window.innerWidth > 980) closeMenu(); });
      document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    }

    if (productDropdown) {
      const trigger = productDropdown.querySelector('.nav-link');
      if (trigger) {
        trigger.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            productDropdown.classList.add('open');
            const first = productDropdown.querySelector('.dropdown-link');
            if (first) first.focus();
          }
        });
      }
      productDropdown.querySelectorAll('.dropdown-link').forEach((link) => {
        link.addEventListener('click', () => productDropdown.classList.remove('open'));
      });
    }

    const current = body.dataset.page || 'home';
    document.querySelectorAll('[data-nav-page]').forEach((link) => {
      link.classList.toggle('active', link.dataset.navPage === current);
    });
  };

  const initControls = () => {
    const themeButton = document.querySelector('[data-theme-toggle]');
    if (themeButton) themeButton.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark', true));
    document.querySelectorAll('[data-set-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.setLang, true)));

    const search = document.querySelector('[data-model-search]');
    if (search) search.addEventListener('input', updateModelFilter);
    const clear = document.querySelector('[data-search-clear]');
    if (clear) clear.addEventListener('click', () => {
      if (search) {
        search.value = '';
        search.focus();
        updateModelFilter();
      }
    });

    document.querySelectorAll('[data-copy]').forEach((button) => {
      button.addEventListener('click', () => copyText(button.dataset.copy || ''));
    });

    const form = document.querySelector('[data-mailto-form]');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const direction = data.get('direction') || '';
        const subject = (lang === 'zh' ? '官网项目咨询｜' : 'Website project enquiry | ') + direction;
        const lines = lang === 'zh'
          ? ['称呼：' + (data.get('name') || ''), '公司：' + (data.get('company') || ''), '联系方式：' + (data.get('contact') || ''), '项目方向：' + direction, '', '需求说明：', (data.get('message') || '')]
          : ['Name: ' + (data.get('name') || ''), 'Company: ' + (data.get('company') || ''), 'Contact: ' + (data.get('contact') || ''), 'Product direction: ' + direction, '', 'Project details:', (data.get('message') || '')];
        window.location.href = 'mailto:lwhwdmdc@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        showToast(tr('contact.mailOpening'));
      });
    }
  };

  const initMotion = () => {
    document.addEventListener('pointermove', (event) => {
      root.style.setProperty('--mx', event.clientX + 'px');
      root.style.setProperty('--my', event.clientY + 'px');
    }, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .1, rootMargin: '0px 0px -4% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const revealVisibleNow = (immediate) => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * .98 && rect.bottom > 0) {
          if (immediate) el.style.transitionDuration = '0s';
          el.classList.add('is-visible');
          if (immediate) setTimeout(() => { el.style.transitionDuration = ''; }, 40);
        }
      });
    };
    window.addEventListener('load', () => { if (location.hash) revealVisibleNow(true); }, { once: true });
    window.addEventListener('hashchange', () => setTimeout(() => revealVisibleNow(true), 420));
    setTimeout(() => { if (location.hash) revealVisibleNow(true); else revealVisibleNow(false); }, 360);

    if (window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-tilt]').forEach((card) => {
        card.addEventListener('pointermove', (event) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty('--mx', (x * 100) + '%');
          card.style.setProperty('--my', (y * 100) + '%');
          card.style.setProperty('--ry', ((x - .5) * 3.2) + 'deg');
          card.style.setProperty('--rx', ((.5 - y) * 3.2) + 'deg');
          card.style.transform = 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-3px)';
        });
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
          card.style.setProperty('--rx', '0deg');
          card.style.setProperty('--ry', '0deg');
        });
      });

      const heroStage = document.querySelector('[data-hero-tilt]');
      const heroVisual = heroStage ? heroStage.closest('.hero-visual') : null;
      if (heroStage && heroVisual) {
        heroVisual.addEventListener('pointermove', (event) => {
          const rect = heroVisual.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - .5;
          const y = (event.clientY - rect.top) / rect.height - .5;
          heroStage.style.transform = 'rotateY(' + (x * 5) + 'deg) rotateX(' + (-y * 4) + 'deg) translateY(-2px)';
        });
        heroVisual.addEventListener('pointerleave', () => { heroStage.style.transform = ''; });
      }
    }

    const sections = Array.from(document.querySelectorAll('.product-chapter'));
    if (sections.length) {
      const links = Array.from(document.querySelectorAll('.product-index-link'));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
          }
        });
      }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });
      sections.forEach((section) => observer.observe(section));
    }

    document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
  };

  setTheme(theme, false);
  initHeader();
  initControls();
  initMotion();
  applyLanguage(lang, false);
})();
