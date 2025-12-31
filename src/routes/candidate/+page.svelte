<script>
  import { onMount } from 'svelte';
  import { 
    Facebook, Twitter, Instagram, Youtube, 
    MapPin,CheckCircle2, User, Star, FileDown,
    X, Menu, PlayCircle
  } from 'lucide-svelte';
  import { getCandidateByCategory } from '$lib/sanity';
  import { slide } from 'svelte/transition';


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Candidates', href: '/candidate' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const categories = [
    'Customer Support Agent',
    'Executive Assistant',
    'Finance & Accounting',
    'Operations Specialist'
  ]

  let selectedCategory = categories[0];
  /**
     * @type {{ image: any; name: string; title: any; location: any; experience: string | any[]; availability: any; resumeUrl: any; skills: any; bio: any; introVideo: any; } | null}
     */
  let candidate = null;
  let loading = true;
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

  /**
     * @param {string | string[]} url
     */
  function getVideoType(url) {
    if (!url) return null;
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    return 'file';
  }

  /**
     * @param {string} url
     */
  function getEmbedUrl(url) {
    if (!url) return '';
    
    // Handle YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const id = (match && match[2].length === 11) ? match[2] : null;
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    
    // Handle Vimeo
    if (url.includes('vimeo.com')) {
      const regExp = /vimeo\.com\/(\d+)/;
      const match = url.match(regExp);
      const id = match ? match[1] : null;
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }

    return url;
  }

  /**
     * @param {string} category
     */
  async function loadCandidate(category) {
    loading = true;
    selectedCategory = category;
    candidate = null;

    try {
      candidate = await getCandidateByCategory(category);
    } catch (error) {
      console.error("Failed to fetch candidate:", error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadCandidate(selectedCategory);
  });
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
  <header class="relative bg-black/5 pt-48 pb-12 lg:pt-56 lg:pb-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
          Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A70E03] to-[#d91204]">Candidate</span>
        </h1>
        <p class="text-xl text-black/80 mb-10 leading-relaxed">
           Select a category below to get a glimpse of the top-tier talent we place. Profiles are pre-vetted, trained, and ready to make an impact.
        </p>
      </div>
    </div>
    <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-3xl -z-0"></div>
    <div class="absolute top-0 left-0 -translate-y-12 -translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl -z-0"></div>
  </header>

  <section class="bg-white pt-8 pb-12 border-b border-gray-100 sticky top-0 z-30 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-4">
        {#each categories as cat}
          <button 
            on:click={() => loadCandidate(cat)}
            class="px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5
            {selectedCategory === cat 
              ? 'bg-[#A70E03] text-white shadow-lg shadow-red-900/20' 
              : 'bg-white border border-gray-200 text-gray-600 hover:border-[#A70E03] hover:text-[#A70E03]'}"
          >
            {cat}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-12 bg-white relative min-h-[600px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {#if loading}
        <div class="flex justify-center items-center h-96">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#A70E03]"></div>
        </div>
      {:else if candidate}
        <div class="grid lg:grid-cols-3 gap-12" transition:slide>
          
          <div class="lg:col-span-1 space-y-8">
            <div class="bg-white rounded-3xl border border-black/10 p-6 shadow-xl relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#A70E03] to-[#d91204]"></div>
              
              <div class="relative flex flex-col items-center text-center mt-8">
                <div class="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 bg-gray-200">
                  <img src={candidate.image} alt={candidate.name} class="w-full h-full object-cover" />
                </div>
                <h2 class="text-2xl font-bold text-black mb-1">{candidate.name}</h2>
                <p class="text-[#A70E03] font-medium mb-4">{candidate.title}</p>
                
                <div class="w-full border-t border-black/5 py-4 space-y-3">
                  <div class="flex items-center gap-3 text-sm text-black/70 justify-center">
                    <MapPin size={16} class="text-[#A70E03]" />
                    {candidate.location}
                  </div>
                  <div class="flex items-center gap-3 text-sm text-green-600 font-semibold justify-center">
                    <CheckCircle2 size={16} />
                    {candidate.availability}
                  </div>
                </div>

                <div class="w-full space-y-3 mt-2">
                  <a href="/contact" class="block w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-[#A70E03] transition-colors shadow-lg shadow-black/10">
                    Inquire About {candidate.name.split(' ')[0]}
                  </a>
                  
                  {#if candidate.resumeUrl}
                    <a href={candidate.resumeUrl} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full bg-white border-2 border-black/10 text-black py-3 rounded-xl font-bold hover:bg-slate-50 hover:border-black/20 transition-colors">
                      <FileDown size={18} /> Download Resume
                    </a>
                  {/if}
                </div>
              </div>
            </div>

            <div class="bg-black/5 rounded-3xl p-8 border border-black/5">
              <h3 class="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <Star size={20} class="text-[#A70E03]" /> Skills & Expertise
              </h3>
              <div class="flex flex-wrap gap-2">
                {#if candidate.skills}
                  {#each candidate.skills as skill}
                    <span class="px-3 py-1 bg-white border border-black/10 rounded-full text-sm text-black/80 font-medium">
                      {skill}
                    </span>
                  {/each}
                {/if}
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 space-y-12">
            
            <div>
              <h3 class="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <User size={28} class="text-[#A70E03]" /> About Me
              </h3>
              <div class="prose prose-lg text-black/70">
                <p>{candidate.bio}</p>
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-black mb-8 flex items-center gap-3">
                <PlayCircle size={28} class="text-[#A70E03]" /> Introductory Video
              </h3>
              
              {#if candidate.introVideo}
                <div class="rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-black aspect-video relative group">
                  
                  {#if getVideoType(candidate.introVideo) === 'youtube' || getVideoType(candidate.introVideo) === 'vimeo'}
                    <iframe 
                      src={getEmbedUrl(candidate.introVideo)} 
                      title="Candidate Intro Video"
                      class="w-full h-full"
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen
                    ></iframe>
                  {:else}
                    <video 
                       controls 
                       class="w-full h-full object-cover"
                       src={candidate.introVideo}
                       poster={candidate.image} 
                     >
                       <track kind="captions" />
                       Your browser does not support the video tag.
                     </video>
                  {/if}

                </div>
                <p class="mt-4 text-black/60 italic text-sm text-center">
                  Get a sense of {candidate.name.split(' ')[0]}'s communication style and professionalism.
                </p>
              {:else}
                 <div class="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
                    <div class="inline-flex bg-slate-200 p-4 rounded-full mb-4">
                       <PlayCircle size={32} class="text-slate-400" />
                    </div>
                    <p class="text-slate-500 font-medium">No introductory video available for this candidate.</p>
                 </div>
              {/if}
            </div>
            </div>

        </div>
      {:else}
        <div class="text-center py-24">
          <div class="bg-slate-50 inline-block p-8 rounded-full mb-6">
            <User size={48} class="text-slate-300" />
          </div>
          <h3 class="text-2xl font-bold text-black mb-4">No Candidate Found</h3>
          <p class="text-black/60 max-w-md mx-auto">
            We currently don't have a featured candidate displayed for the <span class="font-bold text-[#A70E03]">{selectedCategory}</span> category. 
            Please contact us directly for our full roster.
          </p>
          <a href="/contact" class="inline-block mt-8 bg-[#A70E03] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
            Contact Us
          </a>
        </div>
      {/if}

    </div>
  </section>

  <!-- CTA Section (Shared) -->
  <section class="py-24 bg-[#A70E03] text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Looking for Talent Like {candidate ? candidate.name.split(' ')[0] : 'This'}?</h2>
      <p class="text-xl text-white/80 mb-10">
        We have a pool of pre-vetted professionals ready to join your team.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="bg-white text-[#A70E03] px-8 py-4 rounded-lg font-bold hover:bg-black/10 transition-colors shadow-lg">
          Start Hiring Today
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
            <!-- <a href="#" target="_blank" rel="noopener noreferrer" class="hover:text-white"><Twitter size={20}/></a> -->
            <a href="https://www.instagram.com/kilo4consulting/" target="_blank" rel="noopener noreferrer" class="hover:text-white"><Instagram size={20}/></a>
            <!-- <a href="#" target="_blank" rel="noopener noreferrer" class="hover:text-white"><Youtube size={20}/></a> -->
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