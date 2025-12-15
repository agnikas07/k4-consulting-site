<script>
  import { onMount } from 'svelte';
  import { Rocket, Github, Globe, Terminal, ArrowRight, Code, Layers, Zap, CheckCircle } from 'lucide-svelte';

  let activeStep = 0;
  let copied = false;
  
  const steps = [
    { 
      title: 'Initialize', 
      icon: Terminal, 
      desc: 'Create SvelteKit app', 
      cmd: 'npm create svelte@latest' 
    },
    { 
      title: 'Push', 
      icon: Github, 
      desc: 'Commit code to GitHub', 
      cmd: 'git push -u origin main' 
    },
    { 
      title: 'Deploy', 
      icon: Globe, 
      desc: 'Connect to Vercel', 
      cmd: 'vercel --prod' 
    }
  ];

  const features = [
    { title: 'SvelteKit', desc: 'Full-stack app framework', icon: Code },
    { title: 'Tailwind CSS', desc: 'Utility-first styling', icon: Layers },
    { title: 'Vercel Ready', desc: 'Optimized for Serverless', icon: Zap },
  ];

  onMount(() => {
    const timer = setInterval(() => {
      activeStep = (activeStep + 1) % steps.length;
    }, 4000);
    return () => clearInterval(timer);
  });

  const copyToClipboard = (/** @type {string} */ text) => {
    try {
      navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };
</script>

<div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
  <!-- Navigation -->
  <nav class="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <div class="bg-gradient-to-tr from-orange-500 to-red-500 p-2 rounded-lg">
            <Rocket size={20} class="text-white" />
          </div>
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            SvelteLaunch
          </span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#docs" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Documentation</a>
          <a href="#components" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Components</a>
          <button class="bg-white text-slate-900 px-4 py-2 rounded-md text-sm font-bold hover:bg-slate-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          v1.0.0 SvelteKit Initialized
        </div>
        
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Cybernetically <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Enhanced</span> <br/>
          Web Apps
        </h1>
        
        <p class="text-lg text-slate-400 max-w-xl">
          Your repository is ready. This starter template comes pre-configured for SvelteKit. Edit <code>src/routes/+page.svelte</code> to start building.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <button 
            on:click={() => copyToClipboard('git clone https://github.com/your-username/repo.git')}
            class="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            {#if copied}
              <CheckCircle size={20} />
              Copied!
            {:else}
              <Terminal size={20} />
              Clone Repo
            {/if}
          </button>
          <button class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold border border-slate-700 transition-all">
            <Github size={20} />
            View on GitHub
          </button>
        </div>
      </div>

      <!-- Interactive Preview Card -->
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          <div class="absolute top-0 right-0 p-4 opacity-10">
            <Code size={120} />
          </div>

          <div class="space-y-6 relative z-10">
            <h3 class="text-xl font-semibold text-white">Quick Deploy Status</h3>
            
            <div class="space-y-4">
              {#each steps as step, idx}
                <div 
                  class="flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 {idx === activeStep ? 'bg-orange-500/10 border-orange-500/50 scale-105 shadow-lg shadow-orange-500/10' : 'bg-slate-800/50 border-transparent opacity-60'}"
                >
                  <div class="p-2 rounded-lg {idx === activeStep ? 'bg-orange-500 text-white' : 'bg-slate-700 text-slate-400'}">
                    <svelte:component this={step.icon} size={20} />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-medium {idx === activeStep ? 'text-white' : 'text-slate-300'}">{step.title}</h4>
                    <p class="text-xs text-slate-500">{step.desc}</p>
                  </div>
                  {#if idx === activeStep}
                    <div class="hidden sm:block">
                       <ArrowRight size={16} class="text-orange-400 animate-pulse" />
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="mt-6 pt-6 border-t border-slate-800">
              <div class="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>deployment-id: git-sha-82f9c2</span>
                <span class="flex items-center gap-1 text-emerald-400">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Features Grid -->
  <div class="bg-slate-900/50 border-y border-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid md:grid-cols-3 gap-8">
        {#each features as feature}
          <div class="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/30 transition-colors group">
            <div class="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svelte:component this={feature.icon} class="text-orange-400" size={24} />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p class="text-slate-400">{feature.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="border-t border-slate-800 bg-slate-950 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-2">
         <Rocket size={20} class="text-orange-500" />
         <span class="text-slate-300 font-semibold">SvelteLaunch Template</span>
      </div>
      <p class="text-slate-500 text-sm">
        Ready to deploy on <a href="https://vercel.com" class="text-white hover:underline decoration-orange-500 underline-offset-4">Vercel</a>
      </p>
    </div>
  </footer>
</div>