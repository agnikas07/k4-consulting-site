<script>
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    ArrowRight, CheckCircle2, ShieldCheck, 
    Headphones, UserCheck, Calculator, Briefcase, 
    Users, TrendingUp, Star, Award, 
    X, Menu,

    LifeBuoy,

    UserX,

    UserPlus,

    Settings,

    DollarSign,

    Wallet,

    Clock







  } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Candidates', href: '/candidate' },
    { name: 'Contact Us', href: '/contact' }
  ];

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  $: if (typeof document !== 'undefined') {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  const services = [
    {
      title: 'Become a CHAMP for Your Business',
      desc: 'A tax-advantaged benefits system that increases employee take-home pay, improves retention, reduces employer taxes, and can supplement your current benefits or stand alone, all at zero net cost.',
      icon: Award
    },
    {
      title: 'Systems & Operations Consulting',
      desc: 'We diagnose bottlenecks, rebuild workflows, and install the processes that make your business run cleaner, faster, and without constant firefighting.',
      icon: Settings
    },
    {
      title: 'Remote Talent Acquisition',
      desc: 'Hiring without borders. Elite, pre-vetted remote professionals who plug directly into your operations and expand your capacity without expanding payroll.',
      icon: UserPlus
    },
    {
      title: 'Fractional COO/CSO Services',
      desc: 'Leadership without the full-time salary. I help you set direction, build execution plans, align your team, and keep the business moving forward.',
      icon: LifeBuoy
    }
  ];

  const stats = [
    { label: 'PAYROLL SAVINGS', value: '60-80%', icon: Calculator },
    { label: 'COMP GAIN PEPM', value: '$30-$300', icon: Briefcase },
    { label: 'EMPLOYER TAX SAVINGS', value: '$573.60', icon: Wallet },
    { label: 'HOURS BACK WEEKLY', value: '40+', icon: Clock },
  ];
</script>

<svelte:head>
  <title>Kilo 4 Consulting</title>
</svelte:head>

<div class="font-sans text-black bg-white">
  
  <nav class="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-40">
        <!-- Logo -->
        <div class="flex items-center gap-2">
           <img src="/assets/k4Logo.png" alt="K4 Logo" class="h-24 md:h-40 w-auto" />
          <!-- <span class="text-xl font-bold text-black tracking-tight">Kilo 4 Consulting</span> -->
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          {#each navLinks as link}
            <a href={link.href} class="text-sm font-medium text-black hover:text-[#A70E03] transition-colors">
              {link.name}
            </a>
          {/each}
          <a href="/contact" class="bg-[#A70E03] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] transition-colors shadow-lg shadow-red-900/20">
            Schedule A Consultation
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-black relative z-50 p-2" on:click={toggleMobileMenu} aria-label="Toggle menu">
          {#if isMobileMenuOpen}
            <X size={28} />
          {:else}
            <Menu size={28} />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    {#if isMobileMenuOpen}
      <div 
        transition:slide={{ duration: 300, axis: 'y' }}
        class="fixed inset-0 bg-white z-40 flex flex-col pt-40 px-6 space-y-6 md:hidden overflow-y-auto h-screen"
      >
        {#each navLinks as link}
          <a 
            href={link.href} 
            class="text-2xl font-bold text-black hover:text-[#A70E03] transition-colors border-b border-gray-100 pb-4"
            on:click={() => isMobileMenuOpen = false}
          >
            {link.name}
          </a>
        {/each}
        <a 
          href="/contact" 
          class="bg-[#A70E03] text-white text-center py-4 rounded-xl font-bold text-xl hover:bg-[#D4AF37] transition-colors shadow-lg shadow-red-900/20"
          on:click={() => isMobileMenuOpen = false}
        >
          Get A Quote
        </a>
      </div>
    {/if}
  </nav>

  <!-- Hero Section -->
  <header class="relative bg-white pt-48 pb-24 lg:pt-50 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: Text -->
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
            Better Talent. Better Systems. <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">Better Business.</span>
          </h1>
          <p class="text-xl text-black mb-10 leading-relaxed">
            When your talent, systems, and benefits all run right, the business stops draining you and starts compounding. We build that for you.
          </p>
          <div class="flex flex-wrap gap-4 items-center">
            <a href="/services" class="inline-flex items-center gap-2 bg-[#A70E03] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/20">
              See the Breakdown <ArrowRight size={20} />
            </a>
            <div class="flex items-center gap-4 px-6">
              <a href="https://www.facebook.com/profile.php?id=61577257187782" target="_blank" rel="noopener noreferrer" class="text-black hover:text-[#A70E03] transition-colors"><Facebook size={20}/></a>
              <!-- <a href="#" class="text-black hover:text-[#A70E03] transition-colors"><Twitter size={20}/></a> -->
              <a href="https://www.instagram.com/kilo4consulting/" target="_blank" rel="noopener noreferrer" class="text-black hover:text-[#A70E03] transition-colors"><Instagram size={20}/></a>
            </div>
          </div>
        </div>

        <!-- Right Column: Image Framed Off to the Side -->
        <div class="relative flex items-center justify-center">
            <!-- Decorative blur element behind image -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
            
            <img 
            src="/assets/MainPhoto.jpeg" 
            alt="Hero Section" 
            class="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
            />
        </div>

      </div>
    </div>
  </header>

  <!-- About Section -->
  <section id="about" class="py-24 bg-[#3C373D] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-4xl font-bold text-white">About Us</h2>
          <div class="prose prose-lg text-white max-w-none space-y-4">
            <p>
              Kilo 4 Consulting was built on a simple belief: most businesses don’t fail from lack of effort. They fail from lack of structure. We help founders install the systems, talent, and benefits that make growth predictable instead of painful. If it doesn’t move the business forward, we don’t do it.
            </p>
            <p>
              Our founder is an Air Force Veteran that brings the discipline, clarity, and leadership forged in service into every part of the business.
            </p>
            <p>
              No fluff. No guesswork. Just execution.
            </p>
          </div>
          <a href="/about" class="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:underline decoration-2 underline-offset-4">
            Discover More About Us <ArrowRight size={16} />
          </a>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-[#A70E03]/5 rounded-2xl transform rotate-3"></div>
          <img 
            src="/assets/aboutSectionImage.jpg" 
            alt="Business meeting" 
            class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- What We Do / Approach -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Left Col -->
        <div>
          <h3 class="text-[#A70E03] font-bold uppercase tracking-wider text-sm mb-2">What We Do</h3>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">Connecting Talent & Opportunity</h2>
          <p class="text-slate-600 mb-8">
            We help founders remove the bottlenecks that slow their business down. Whether that’s missing talent, sloppy systems, weak training, or benefits that don’t retain anyone. Our work covers the full support stack, and you get a business that grows without leaning on you for everything.
          </p>
          <img 
            src="/assets/whatWeDoImage.jpg" 
            alt="Team collaboration" 
            class="rounded-xl shadow-lg mb-8"
          />
        </div>

        <!-- Right Col -->
        <div>
          <h3 class="text-[#A70E03] font-bold uppercase tracking-wider text-sm mb-2">Our Approach</h3>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">More leverage. More output.</h2>
          <p class="text-slate-600 mb-6">
            We don’t bury you in long contracts or push benefits that drain your margin. We keep the model simple: give founders capable people, cleaner systems, and a benefits program that pays for itself — then back it up with consulting or training when the business needs it. 
          </p>
          
          <ul class="space-y-4">
            {#each [
              'Hiring elite remote professionals',
              'Tightening operations and workflows',
              'Turning your team into CHAMPs with tax-advantaged benefits',
              'Delivering creative consulting to solve real business problems'
            ] as item}
              <li class="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <ShieldCheck class="text-[#d91204] shrink-0 mt-0.5" size={20} />
                <span class="text-slate-700 font-medium">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-24 bg-[#3C373D] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-4xl font-bold mb-4">Solutions For Every Corner</h2>
        <p class="text-red-75 text-lg">
          Kilo 4 Consulting delivers the core support founders need to scale. From world-class talent to stronger systems to benefits that actually move the needle.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each services as service}
          <div class="border border-white/40 p-8 rounded-2xl hover:bg-black/20 transition-colors group">
            <div class="bg-[#8a0b02]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-red-200 group-hover:text-white transition-colors">
              <svelte:component this={service.icon} size={28} />
            </div>
            <h3 class="text-xl font-bold mb-3">{service.title}</h3>
            <p class="text-red-75 text-sm leading-relaxed">{service.desc}</p>
          </div>
        {/each}
      </div>

      <div class="text-center mt-12">
        <a href="/services" class="inline-block bg-white text-[#A70E03] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors">
          View All Services
        </a>
      </div>
    </div>
  </section>

  <!-- Mission & Why Choose Us -->
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2 relative">
          <div class="absolute -left-10 -top-10 w-40 h-40 bg-red-100 rounded-full blur-3xl"></div>
          <img 
            src="/assets/ourMissionImage.jpg" 
            alt="Mission discussion" 
            class="relative rounded-2xl shadow-2xl z-10"
          />
        </div>
        
        <div class="lg:w-1/2">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p class="text-slate-600 text-lg mb-8">
            Kilo 4 Consulting exists to help founders regain control of their business. Built by a USAF veteran who knows service doesn’t have to stop when you take off the uniform, our work is grounded in discipline, clarity, and execution. Everything we do is designed to remove friction, restore structure, and give owners the support they need to scale.
          </p>

          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">Our Goal is Simple:</h3>
              <ul class="space-y-2 text-slate-600">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span> Give business owners their time and focus back
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span> Create stronger teams, cleaner systems, and better outcomes
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span> Equip businesses with benefits and leadership that actually move the needle.
                </li>
              </ul>
            </div>

            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {#each ['Clear, direct guidance from someone who has led teams in high-pressure environments', 
                'Access to elite remote talent when you need to expand capacity', 
                'CHAMP benefits that raise take-home pay while reducing employer taxes', 
                'Systems consulting that removes chaos and builds scalable processes', 
                'Fractional leadership that provides direction without the full-time salary',
                'Straightforward engagement, easy onboarding, and no long-term handcuffs'
                ] as item}
                  <div class="flex items-center gap-2 text-black text-sm font-medium">
                    <CheckCircle2 class="text-green-500 w-4 h-4 shrink-0" />
                    {item}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-16 bg-[#504B51] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center md:divide-x md:divide-white/75">
        {#each stats as stat}
          <div class="px-8 py-4 flex flex-col items-center justify-center">
            <div class="flex justify-center mb-4 text-white">
              <svelte:component this={stat.icon} size={32} />
            </div>
            <div class="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
            <div class="text-white text-sm font-medium uppercase tracking-wide">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="candidate" class="py-24 bg-black text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready To Engineer Your Business For Freedom?</h2>
      <p class="text-xl text-slate-300 mb-10">
        Stop searching and start building. Schedule a free consultation today.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="bg-[#A70E03] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-500 transition-colors shadow-lg shadow-red-600/25">
          Schedule Consultation
        </a>
        <a href="/candidate" class="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors">
          Browse Candidates
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#5A555B] text-slate-400 py-16 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-12">
        <div class="col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <img src="/assets/k4Logo.png" alt="Kilo 4 Consulting Logo" class="h-20 md:h-32 lg:h-40 w-auto"/>
          </div>
          <p class="mb-6 max-w-sm text-white">
            Connect with us on social media!
          </p>
          <div class="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61577257187782" target="_blank" rel="noopener noreferrer" class="hover:text-white"><Facebook size={20}/></a>
            <!-- <a href="#" class="hover:text-white"><Twitter size={20}/></a> -->
            <a href="https://www.instagram.com/kilo4consulting/" target="_blank" rel="noopener noreferrer" class="hover:text-white"><Instagram size={20}/></a>
            <!-- <a href="#" class="hover:text-white"><Youtube size={20}/></a> -->
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="/about" class="text-white hover:text-[#D4AF37] transition-colors">About Us</a></li>
            <li><a href="/services" class="text-white hover:text-[#D4AF37] transition-colors">Our Services</a></li>
            <li><a href="/candidate" class="text-white hover:text-[#D4AF37] transition-colors">Candidates</a></li>
            <li><a href="/contact" class="text-white hover:text-[#D4AF37] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div id="contact">
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
               <span class="block w-2 h-2 rounded-full bg-[#D4AF37]"></span>
               <span class="text-white">+1 (678) 480-0542</span>
            </li>
            <li class="flex items-center gap-3">
               <span class="block w-2 h-2 rounded-full bg-[#D4AF37]"></span>
               <span class="text-white">pablo.g@kilo4consulting.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-900 mt-16 pt-8 text-center text-sm">
        <p>&copy; 2025 Kilo 4 Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>

</div>