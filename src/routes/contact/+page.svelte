<script>
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    ArrowRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2,
    Menu, X
  } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Candidate', href: '/candidate' },
    { name: 'Contact Us', href: '/contact' }
  ];

  // Contact Info
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Business Avenue, Suite 100', 'New York, NY 10001']
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['support@kilo4.com', 'careers@kilo4.com']
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: Closed']
    }
  ];

  let formStatus = 'idle';
  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  $: if (typeof window !== 'undefined') {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
     * @param {{ preventDefault: () => void; target: any; }} event
     */
  async function handleSubmit(event) {
    event.preventDefault();
    formStatus = 'submitting';

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xykgggay', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus = 'success';
        form.reset();
      } else {
        const result = await response.json();
        console.error("Formspree Error:", result);
        formStatus = 'error';
      }
    } catch (error) {
      console.error("Submission Error:", error);
      formStatus = 'error';
    }
  }
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
          <a href="/contact" class="bg-[#A70E03] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4AF37] transition-colors shadow-lg shadow-red-900/20">
            Get A Quote
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
          Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">Touch</span>
        </h1>
        <p class="text-xl text-black/80 mb-10 leading-relaxed">
          Have questions or ready to start building your team? Reach out to us and we'll get back to you shortly.
        </p>
      </div>
    </div>
    <!-- Decorative Background Graphic -->
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
    <div class="absolute top-0 left-0 -translate-y-12 -translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl -z-0"></div>
  </header>

  <!-- Contact Form & Info Section -->
  <section class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        
        <!-- Left Column: Contact Form -->
        <div class="bg-white p-8 md:p-10 rounded-3xl border border-black/10 shadow-xl h-fit">
          <h2 class="text-3xl font-bold text-black mb-2">Send us a Message</h2>
          <p class="text-black/60 mb-8">We'd love to hear from you. Fill out the form below.</p>
          
          {#if formStatus === 'success'}
            <div class="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
              <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 class="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p class="text-green-700">Thank you for contacting us. We will get back to you shortly.</p>
            </div>
          {:else}
            <form on:submit={handleSubmit} class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="name" class="text-sm font-semibold text-black">Full Name</label>
                  <input type="text" name="name" id="name" required placeholder="John Doe" class="w-full px-4 py-3 rounded-lg border border-black/10 bg-black/5 focus:border-[#A70E03] focus:ring-1 focus:ring-[#A70E03] outline-none transition-colors" />
                </div>
                <div class="space-y-2">
                  <label for="email" class="text-sm font-semibold text-black">Email Address</label>
                  <input type="email" name="email" id="email" required placeholder="john@example.com" class="w-full px-4 py-3 rounded-lg border border-black/10 bg-black/5 focus:border-[#A70E03] focus:ring-1 focus:ring-[#A70E03] outline-none transition-colors" />
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="phone" class="text-sm font-semibold text-black">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 rounded-lg border border-black/10 bg-black/5 focus:border-[#A70E03] focus:ring-1 focus:ring-[#A70E03] outline-none transition-colors" />
                </div>
                <div class="space-y-2">
                  <label for="subject" class="text-sm font-semibold text-black">Subject</label>
                  <input type="text" name="subject" id="subject" required placeholder="Hiring Inquiry" class="w-full px-4 py-3 rounded-lg border border-black/10 bg-black/5 focus:border-[#A70E03] focus:ring-1 focus:ring-[#A70E03] outline-none transition-colors" />
                </div>
              </div>

              <div class="space-y-2">
                <label for="message" class="text-sm font-semibold text-black">Your Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Tell us about your staffing needs..." class="w-full px-4 py-3 rounded-lg border border-black/10 bg-black/5 focus:border-[#A70E03] focus:ring-1 focus:ring-[#A70E03] outline-none transition-colors resize-none"></textarea>
              </div>

              {#if formStatus === 'error'}
                <p class="text-red-600 text-sm bg-red-50 p-3 rounded-lg">Something went wrong. Please verify your Formspree ID or try again later.</p>
              {/if}

              <button type="submit" disabled={formStatus === 'submitting'} class="w-full bg-[#A70E03] text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 group disabled:opacity-70 disabled:cursor-not-allowed">
                {#if formStatus === 'submitting'}
                  Sending...
                {:else}
                  Send Message <Send size={18} class="group-hover:translate-x-1 transition-transform" />
                {/if}
              </button>
            </form>
          {/if}
        </div>

        <!-- Right Column: Contact Info & Map -->
        <div class="space-y-10">
          <div>
            <h2 class="text-3xl font-bold text-black mb-2">Contact Information</h2>
            <p class="text-black/60 mb-8">Reach out directly via phone, email, or visit our office.</p>
            
            <div class="grid gap-6">
              {#each contactInfo as info}
                <div class="flex items-start gap-4 p-6 bg-white rounded-2xl border border-black/5 hover:border-[#A70E03]/20 transition-colors shadow-sm">
                  <div class="w-12 h-12 rounded-xl bg-[#A70E03]/10 text-[#A70E03] flex items-center justify-center shrink-0">
                    <svelte:component this={info.icon} size={24} />
                  </div>
                  <div>
                    <h3 class="font-bold text-black mb-1">{info.title}</h3>
                    {#each info.details as detail}
                      <p class="text-black/70 text-sm">{detail}</p>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Simple Map Placeholder / Graphic -->
          <!-- <div class="relative w-full h-64 bg-black/5 rounded-3xl overflow-hidden border border-black/5 flex items-center justify-center group"> -->
             <!-- Placeholder Map Image -->
             <!-- <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1748&q=80" alt="Map Location" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity" />
             <div class="relative z-10 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <MapPin size={18} class="text-[#A70E03]" />
                <span class="text-black font-bold text-sm">New York Office</span>
             </div>
          </div> -->

        </div>

      </div>
    </div>
  </section>

  <!-- CTA Section (Shared) -->
  <section class="py-24 bg-[#A70E03] text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Hire?</h2>
      <p class="text-xl text-white/80 mb-10">
        Let's discuss how we can help you build your dream team.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="bg-white text-[#A70E03] px-8 py-4 rounded-lg font-bold hover:bg-black/10 transition-colors shadow-lg">
          <a href="/contact">Schedule a Call</a>
        </button>
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
            <li><a href="/candidate" class="text-white hover:text-[#D4AF37] transition-colors">Candidate Search</a></li>
            <li><a href="/contact" class="text-white hover:text-[#D4AF37] transition-colors">Contact Support</a></li>
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