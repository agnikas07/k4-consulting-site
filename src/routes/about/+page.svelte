<script>
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    ArrowRight, CheckCircle2, ShieldCheck, 
    UserCheck, Users, Target, Award, Heart
  } from 'lucide-svelte';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Candidate', href: '/candidate' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const values = [
    {
      title: 'Integrity First',
      desc: 'We operate with unwavering honesty and ethical standards in every placement.',
      icon: ShieldCheck
    },
    {
      title: 'Discipline',
      desc: 'Our military roots instill a rigorous approach to vetting and process management.',
      icon: Target
    },
    {
      title: 'Commitment',
      desc: 'We are dedicated to the long-term success of both our clients and our candidates.',
      icon: Heart
    }
  ];
</script>

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
          <a href="/#contact" class="bg-[#A70E03] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] transition-colors shadow-lg shadow-red-900/20">
            Get A Quote
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-black">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="relative bg-black/5 pt-48 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
          Our Story & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">Mission</span>
        </h1>
        <p class="text-xl text-black/80 mb-10 leading-relaxed">
          Bridging the gap between U.S. businesses and global talent through discipline, integrity, and operational excellence.
        </p>
      </div>
    </div>
    <!-- Decorative Background Graphic -->
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
    <div class="absolute top-0 left-0 -translate-y-12 -translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl -z-0"></div>
  </header>

  <!-- Founder / Story Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image with styling -->
        <div class="relative order-2 lg:order-1">
          <div class="absolute -inset-4 bg-[#A70E03]/5 rounded-2xl transform -rotate-2"></div>
          <img 
            src="/assets/aboutSectionImage.jpg" 
            alt="Founder or Team" 
            class="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
          />
          <div class="absolute -bottom-6 -right-6 bg-[#A70E03] text-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
            <p class="font-bold text-lg mb-2">"Service Before Self"</p>
            <p class="text-white/80 text-sm">Guided by core military principles.</p>
          </div>
        </div>
        
        <!-- Text Content -->
        <div class="space-y-8 order-1 lg:order-2">
          <div>
            <h3 class="text-[#A70E03] font-bold uppercase tracking-wider text-sm mb-2">Our Origins</h3>
            <h2 class="text-4xl font-bold text-black">Forged in Service</h2>
          </div>
          <div class="prose prose-lg text-black/70 space-y-6">
            <p>
              Kilo 4 Consulting was born from a desire to bring a higher standard of reliability to the remote staffing industry. Too often, businesses struggle with unvetted freelancers, inconsistent communication, and a lack of accountability.
            </p>
            <p>
              Our founder, a former <strong>U.S. Air Force Explosive Detection Dog Handler</strong>, understands that the success of any mission relies on the quality of the team and the discipline of their execution.
            </p>
            <p class="border-l-4 border-[#A70E03] pl-6 italic text-black bg-black/5 py-4 pr-4 rounded-r-lg">
              "In the military, trust is everything. We apply that same level of trust and verification to connecting business owners with their new team members."
            </p>
            <p>
              Today, we serve as the bridge, ensuring that U.S. companies can scale efficiently while providing life-changing career opportunities to talented professionals abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values Section -->
  <section class="py-24 bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-4xl font-bold mb-4">Our Core Values</h2>
        <p class="text-red-100 text-lg">
          These aren't just words on a wall. They are the principles that guide every decision we make and every candidate we place.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each values as value}
          <div class="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div class="bg-[#A70E03] w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/50">
              <svelte:component this={value.icon} size={28} />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">{value.title}</h3>
            <p class="text-white/70 leading-relaxed">{value.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- The "Why" Section -->
  <section class="py-24 bg-black/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold text-black mb-6">Why Kilo 4?</h2>
          <p class="text-black/70 text-lg mb-8">
            The name "Kilo 4" is a nod to the military designation for handlers and specialists. It represents a specific skill set, a specific duty, and a specific standard.
          </p>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#A70E03] text-white">
                  <UserCheck size={24} />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-black">Vetted Excellence</h3>
                <p class="mt-2 text-black/70">
                  We don't just pass along resumes. We interview, verify, and train. Only the top candidates make it to your desk.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#A70E03] text-white">
                  <Users size={24} />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-black">Fair Wages</h3>
                <p class="mt-2 text-black/70">
                  We believe in fair pay for fair work. Our model ensures your team members are motivated, happy, and loyal to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative">
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
             <img 
            src="/assets/ourMissionImage.jpg" 
            alt="Team Collaboration" 
            class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] border-4 border-white"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section (Shared) -->
  <section class="py-24 bg-black text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Join The Mission</h2>
      <p class="text-xl text-white/70 mb-10">
        Ready to build a team that operates with precision and integrity? Let's talk.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/#contact" class="bg-[#A70E03] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-500 transition-colors shadow-lg shadow-red-600/25">
          Schedule Consultation
        </a>
      </div>
    </div>
  </section>

  <!-- Footer (Shared Style) -->
  <footer class="bg-black/90 text-white/60 py-16 border-t border-black">
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
            <li><a href="/about" class="text-white hover:text-[#D4AF37] transition-colors">About Us</a></li>
            <li><a href="/#services" class="text-white hover:text-[#D4AF37] transition-colors">Our Services</a></li>
            <li><a href="/#candidate" class="text-white hover:text-[#D4AF37] transition-colors">Candidate Search</a></li>
            <li><a href="/#contact" class="text-white hover:text-[#D4AF37] transition-colors">Contact Support</a></li>
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
      <div class="border-t border-black mt-16 pt-8 text-center text-sm">
        <p>&copy; 2025 Kilo 4 Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>

</div>