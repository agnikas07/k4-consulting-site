<script>
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    ArrowRight, CheckCircle2, ShieldCheck, 
    Headphones, UserCheck, Calculator, Briefcase, 
    Users, TrendingUp, Star, Award 
  } from 'lucide-svelte';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Candidate', href: '#candidate' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    {
      title: 'Customer Support Agents',
      desc: 'Reliable, trained, and fluent support agents who handle your customer inquiries professionally.',
      icon: Headphones
    },
    {
      title: 'Executive Assistants',
      desc: 'Highly organized assistants who help business owners manage schedules, emails, and daily operations.',
      icon: UserCheck
    },
    {
      title: 'Finance & Accounting',
      desc: 'Experienced professionals for bookkeeping, invoicing, payroll support, and reporting.',
      icon: Calculator
    },
    {
      title: 'Operations Specialists',
      desc: 'Experts who help streamline business processes, manage workflows, and maintain smooth operations.',
      icon: Briefcase
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle2 },
    { label: 'Happy Clients', value: '100%', icon: Users },
    { label: 'Company Rating', value: '4.9', icon: Star },
  ];
</script>

<div class="font-sans text-slate-800 bg-white">
  
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo Placeholder -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-[#A70E03] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            K4
          </div>
          <span class="text-xl font-bold text-slate-900 tracking-tight">Kilo 4 Consulting</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          {#each navLinks as link}
            <a href={link.href} class="text-sm font-medium text-slate-600 hover:text-[#A70E03] transition-colors">
              {link.name}
            </a>
          {/each}
          <a href="#contact" class="bg-[#A70E03] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] transition-colors shadow-lg shadow-red-900/20">
            Get A Quote
          </a>
        </div>

        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-slate-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="relative bg-slate-50 pt-16 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Empowering Businesses With <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">World-Class</span> Remote Talent
        </h1>
        <p class="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
          Hire highly skilled professionals from around the world—carefully vetted, trained, and ready to support your business growth.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <a href="#contact" class="inline-flex items-center gap-2 bg-[#A70E03] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/20">
            Discover Project <ArrowRight size={20} />
          </a>
          <div class="flex items-center gap-4 px-6">
            <a href="#" class="text-slate-400 hover:text-[#A70E03] transition-colors"><Facebook size={20}/></a>
            <a href="#" class="text-slate-400 hover:text-[#A70E03] transition-colors"><Twitter size={20}/></a>
            <a href="#" class="text-slate-400 hover:text-[#A70E03] transition-colors"><Instagram size={20}/></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Decorative Background Graphic -->
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
  </header>

  <!-- About Section -->
  <section id="about" class="py-24 bg-[#3C373D] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-4xl font-bold text-white">About Kilo 4 Consulting</h2>
          <div class="prose prose-lg text-white max-w-none space-y-4">
            <p>
              Kilo 4 Consulting was founded with a vision to create meaningful connections between U.S. businesses and skilled remote professionals across the world.
            </p>
            <p class="border-l-4 border-[#D4AF37] pl-4 italic bg-[#504B51] py-2 pr-2">
              "Our founder, a former U.S. Air Force Explosive Detection Dog Handler, carries years of military discipline, leadership, and commitment."
            </p>
            <p>
              These values shape the foundation of our business, ensuring integrity and excellence in every placement we make.
            </p>
          </div>
          <a href="#about" class="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:underline decoration-2 underline-offset-4">
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
            At Kilo 4 Consulting, we connect U.S. business owners with top-tier remote professionals. We help you build a strong, reliable, and efficient team—without increasing overhead costs.
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
          <h2 class="text-3xl font-bold text-slate-900 mb-6">Fair & Transparent</h2>
          <p class="text-slate-600 mb-6">
            Unlike large agencies that take a significant portion of the worker’s pay, we operate through a one-time placement model.
          </p>
          
          <ul class="space-y-4">
            {#each [
              'Businesses pay directly to their hired employee',
              'Overseas workers earn what they truly deserve',
              'No hidden fees or long-term contracts'
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
          Kilo 4 Consulting offers a streamlined way to hire skilled remote professionals in key business roles.
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
        <a href="#contact" class="inline-block bg-white text-[#A70E03] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors">
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
          <div class="absolute -bottom-6 -right-6 bg-[#A70E03] text-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
            <p class="font-bold text-lg mb-2">"Discipline. Integrity. Commitment."</p>
            <p class="text-slate-400 text-sm">- Core Values</p>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p class="text-slate-600 text-lg mb-8">
            Founded by a former U.S. Air Force Explosive Detection K9 Handler, Kilo 4 Consulting carries values that ensure we serve both businesses and talent with honor.
          </p>

          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-4">Our Goal is Simple:</h3>
              <ul class="space-y-2 text-slate-600">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span> Help business owners reclaim their time
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-600 rounded-full"></span> Provide high-quality career opportunities overseas
                </li>
              </ul>
            </div>

            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {#each ['Direct hiring model', 'Transparent pricing', 'Fully vetted candidates', 'Long-term support', 'Easy onboarding'] as item}
                  <div class="flex items-center gap-2 text-slate-700 text-sm font-medium">
                    <CheckCircle2 class="text-green-500 w-4 h-4" />
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/75">
        {#each stats as stat}
          <div class="p-4">
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
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Team?</h2>
      <p class="text-xl text-slate-300 mb-10">
        Stop searching and start building. Schedule a free consultation today or browse our pre-vetted talent pool.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" class="bg-[#A70E03] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-500 transition-colors shadow-lg shadow-red-600/25">
          Schedule Consultation
        </a>
        <a href="#candidate" class="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors">
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
            Empowering businesses with world-class remote talent. Connecting discipline, integrity, and skill to your workforce needs.
          </p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-white"><Facebook size={20}/></a>
            <a href="#" class="hover:text-white"><Twitter size={20}/></a>
            <a href="#" class="hover:text-white"><Instagram size={20}/></a>
            <a href="#" class="hover:text-white"><Youtube size={20}/></a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-white hover:text-[#D4AF37] transition-colors">About Us</a></li>
            <li><a href="#" class="text-white hover:text-[#D4AF37] transition-colors">Our Services</a></li>
            <li><a href="#" class="text-white hover:text-[#D4AF37] transition-colors">Candidate Search</a></li>
            <li><a href="#" class="text-white hover:text-[#D4AF37] transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div id="contact">
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="mt-1 block w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span class="text-white">123 Business Avenue, Suite 100<br/>New York, NY 10001</span>
            </li>
            <li class="flex items-center gap-3">
               <span class="block w-2 h-2 rounded-full bg-[#D4AF37]"></span>
               <span class="text-white">+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center gap-3">
               <span class="block w-2 h-2 rounded-full bg-[#D4AF37]"></span>
               <span class="text-white">support@kilo4.com</span>
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