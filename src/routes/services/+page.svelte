<script>
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    ArrowRight, CheckCircle2, Headphones, UserCheck, 
    Calculator, Briefcase, FileText, Globe, Phone, 
    Database, BarChart, Clock, Menu, X
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
      title: 'Become a CHAMP For Your Business',
      desc: 'A tax-advantaged benefits system that increases employee take-home pay, improves retention, reduces employer taxes, and can supplement your current benefits or stand alone, all at zero net cost.',
      details: ['Zero Net Cost Implementation', 'Increased Employee Retention', 'Employer Tax Reduction', 'Benefits System Integration'],
      icon: Headphones
    },
    {
      title: 'Remote Talent Acquisition',
      desc: 'Hiring without borders. Elite, pre-vetted remote professionals who plug directly into your operations and expand your capacity without expanding payroll.',
      details: ['Global Talent Sourcing', 'Pre-vetted Professionals', 'Operational Integration', 'Payroll Efficiency'],
      icon: UserCheck
    },
    {
      title: 'Systems & Operations Consulting',
      desc: 'We diagnose bottlenecks, rebuild workflows, and install the processes that make your business run cleaner, faster, and without constant firefighting.',
      details: ['Workflow Diagnosis', 'Bottleneck Removal', 'Process Installation', 'Efficiency Optimization'],
      icon: Calculator
    },
    {
      title: 'Fractional Leadership',
      desc: 'High-level strategic leadership without the full-time salary. I help you set direction, build execution plans, align your team, and keep the business moving forward.',
      details: ['Strategic Direction', 'Execution Planning', 'Team Alignment', 'Business Growth Roadmap'],
      icon: Briefcase
    }
  ];
</script>

<svelte:head>
  <title>Services | Kilo 4 Consulting</title>
</svelte:head>

<div class="font-sans text-black bg-white">
  
  <!-- Navigation Bar (Shared Style) -->
  <nav class="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-40">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2">
           <img src="/assets/k4Logo.png" alt="K4 Logo" class="h-24 md:h-40 w-auto" />
        </a>

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
  <header class="relative bg-black/5 pt-48 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">Services</span>
        </h1>
        <p class="text-xl text-black/80 mb-10 leading-relaxed">
          Comprehensive remote staffing solutions tailored to scale your business and optimize operations.
        </p>
      </div>
    </div>
    <!-- Decorative Background Graphic -->
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
    <div class="absolute top-0 left-0 -translate-y-12 -translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl -z-0"></div>
  </header>

  <!-- Services Grid -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        {#each services as service, i}
          <div class="bg-white rounded-3xl border border-black/10 p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
            
            <!-- Hover Gradient Accent -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A70E03] to-[#d91204] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <!-- Icon & Header -->
            <div class="flex items-start justify-between mb-8 relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-[#A70E03]/5 flex items-center justify-center text-[#A70E03] group-hover:bg-[#A70E03] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                 <svelte:component this={service.icon} size={32} />
              </div>
              <!-- Decorative Number -->
              <span class="text-8xl font-bold text-black/[0.03] absolute -top-6 -right-6 select-none group-hover:text-[#A70E03]/[0.03] transition-colors duration-500">
                0{i + 1}
              </span>
            </div>

            <h3 class="text-3xl font-bold text-black mb-4 group-hover:text-[#A70E03] transition-colors relative z-10">{service.title}</h3>
            
            <p class="text-lg text-black/70 mb-8 leading-relaxed relative z-10">
              {service.desc}
            </p>

            <!-- Key Capabilities Box -->
            <div class="bg-black/5 rounded-2xl p-6 mt-auto relative z-10 border border-black/5 group-hover:border-[#A70E03]/10 transition-colors">
              <h4 class="font-bold text-black mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <CheckCircle2 class="text-[#A70E03]" size={18} />
                Key Capabilities
              </h4>
              <ul class="space-y-3">
                {#each service.details as detail}
                  <li class="flex items-start gap-3 text-sm text-black/80">
                    <div class="w-1.5 h-1.5 rounded-full bg-[#A70E03] mt-2 shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- CTA Link -->
            <div class="pt-8 mt-4 border-t border-black/5 relative z-10">
              <a href="/contact" class="inline-flex items-center gap-2 text-black font-bold hover:text-[#A70E03] transition-colors group/link">
                Request Talent <ArrowRight size={18} class="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-24 bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold mb-6">Our Hiring Process</h2>
        <p class="text-white/70 text-lg">
          We handle the heavy lifting of recruitment so you can focus on scaling your business.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        {#each [
          { title: 'Consultation', desc: 'We discuss your needs and define the role requirements.', icon: Phone },
          { title: 'Sourcing', desc: 'We identify and screen top candidates from our talent pool.', icon: Globe },
          { title: 'Selection', desc: 'You interview the best matches and select your new team member.', icon: UserCheck },
          { title: 'Onboarding', desc: 'We help facilitate a smooth transition and integration.', icon: Briefcase }
        ] as step, i}
          <div class="relative group">
            <div class="mb-6 relative z-10">
              <div class="w-16 h-16 rounded-full bg-[#A70E03] flex items-center justify-center text-white shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                <svelte:component this={step.icon} size={28} />
              </div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#A70E03]/30 rounded-full -z-10 animate-pulse"></div>
            </div>
            {#if i < 3}
              <div class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20 -z-0"></div>
            {/if}
            <div class="text-center relative z-10">
              <h3 class="text-xl font-bold mb-3">{step.title}</h3>
              <p class="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section (Shared) -->
  <section class="py-24 bg-[#A70E03] text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Scale With Confidence</h2>
      <p class="text-xl text-white/80 mb-10">
        Ready to find the perfect addition to your team? Let's get started.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="bg-white text-[#A70E03] px-8 py-4 rounded-lg font-bold hover:bg-[#D4AF37] transition-colors shadow-lg">
          Start Hiring
        </a>
      </div>
    </div>
  </section>

  <!-- Footer (Shared Style) -->
  <footer class="bg-[#5A555B] text-slate-400 py-16 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-12">
        <div class="col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <img src="/assets/k4Logo.png" alt="Kilo 4 Consulting Logo" class="h-20 md:h-32 lg:h-40 w-auto"/>
          </div>
          <p class="mb-6 max-w-sm text-white">
            Empowering businesses with world-class remote talent. Connecting discipline, integrity, and skill to your workforce needs.
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