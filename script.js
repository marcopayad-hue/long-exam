const Q=[
["Environmental science is concerned with","Sustainability and conservation of natural resources","Biodiversity","Ecosystem services","Environmental issues threatening all the living organisms"],
["The main theme of environmental science is","The Earth is the only planet known to sustain life; we must learn how to conserve it","Human activity is the biggest limiting factor; thus, we must ensure our minimal effect on the environment","Humans must take action to mitigate climate change"],
["A branch of biology that deals with the interactions between organisms and their environment","Ecology","Environmental Science","Biodiversity","Systematics"],
["A branch of biology that deals with interactions between humans and their environment","Environmental Science","Ecology","Biodiversity","Systematics"],
["A property of a human society in which ecosystems are managed so present-day conditions can continue","Sustainability","Conservation","Self-sufficiency","Mitigation"],
["The Earth’s ecosystem interacts with the physical environment as a whole","Biosphere","Biome","Ecosystem","Community"],
["Set of organisms and abiotic components connected by matter and energy exchange","Ecosystem","Biosphere","Biome","Community"],
["A group of individuals of the same species living and interbreeding within a given area","Population","Biome","Ecosystem","Community"],
["Non-living chemical and physical factors such as temperature, light, water, and nutrients","Abiotic factors","Biotic components","Non-living components"],
["All living organisms in an ecosystem","Biotic components","Abiotic components","Living components"],
["Provides the energy that drives nearly all ecosystems","Sunlight","Minerals","Nutrients","Water"],
["The area where an organism in an ecosystem lives is called","Habitat","Niche","Ecosystem","Community"],
["The position or role of a species within an ecosystem","Niche","Ecosystem","Community","Habitat"],
["Herbivores are most likely to be found in","2nd trophic level","1st trophic level","3rd trophic level","4th trophic level"],
["Tiny organisms (bacteria & fungi) that turn organic matter into inorganic materials","Decomposers","Detritivores","Herbivores","Omnivores"],
["How do you describe the amount of energy and nutrients transferred across each trophic level?","Decreases","Increases","Constant"],
["Considered as the most important biotic factor","Human","Predators","Invasive species","Decomposers"],
["Which population in a food web would be negatively affected by an increase in the mouse population?","Rabbit","Snake","Wolf","Hawk"],
["Decomposers are important in the environment because they","Convert large molecules into simpler ones that can be recycled","Release heat from large molecules","Convert CO₂ into oxygen","Turn molecules of dead organisms into permanent biotic parts"],
["Which environmental issue is most related to ecology?","Bioamplification","Carbon emissions","Acid rain","Ozone depletion"],
["A hotel installs solar panels. What is the main advantage of using solar energy?","Reduces greenhouse gas emissions and reliance on nonrenewable resources","Guarantees supply during cloudy days","Eliminates the need for conservation measures","Lowers room rates automatically"],
["A hotel introduces a waste segregation program. What is the main purpose?","Ensure proper disposal and reduce environmental impact","Make the lobby more attractive","Shorten housekeeping workload","Increase use of disposables"],
["A hotel sources food from local farmers and fishermen. What is the main benefit?","Reduces transport emissions and supports the local community","Guarantees organic meals","Ensures faster service","Eliminates the need for waste-management policies"],
["Your school wants to reduce waste. Which action best applies conservation?","Bringing a reusable water bottle","Reading about waste problems","Memorizing recyclable types","Watching a landfill documentary"],
["Which student action best applies sustainable living?","Walking or biking to school","Buying imported snacks in plastic","Leaving lights on in daylight","Printing multiple copies instead of submitting digitally"],
["Living things are made up of C, H, O, N. Why are they essential to life?","Form bonds for carbs, proteins, lipids, nucleic acids","Most abundant in Earth’s crust","Heaviest elements (90% by weight)","Exist only in gaseous form"],
["Energy vs matter in ecosystems — which is correct?","Energy flows one-way, matter is recycled","Both cycle continuously","Both stored permanently","Energy cycles just like matter"],
["Which cycle returns CO₂ to the atmosphere via respiration & combustion?","Carbon cycle","Nitrogen cycle","Oxygen cycle","Carbon dioxide cycle"],
["The process moving elements through biosphere parts","Biogeochemical cycle","Food chain","Energy pyramid","Cellular respiration"],
["Difference between biological & geological processes?","Biological = living organisms; geological = physical forces","Biological only in plants; geological only in animals","Biological recycle nitrogen; geological recycle carbon","Both depend mainly on human activity"],
["How do human activities differ from natural processes?","Humans speed up natural cycles (e.g. burning fuels, deforestation)","Humans recycle nutrients naturally","Humans affect only geological processes","Humans don’t interact with natural cycles"],
["A community faces a water shortage. Which action best conserves water?","Collecting rainwater for gardening","Planting more trees for transpiration","Building more concrete pavements","Saying conservation is unnecessary"],
["After urbanization, floods increase. Which factor is disrupted?","Infiltration","Evaporation","Transpiration","Condensation"],
["Planting trees improves air quality because","Trees release O₂ and absorb CO₂","Trees absorb O₂, release CO₂","Trees prevent nitrogen buildup","Trees store water"],
["Deforestation disrupts plant-animal balance — what happens?","Less photosynthesis → less O₂ → animals struggle to breathe","Less respiration → more O₂ → plants grow faster","More photosynthesis → more CO₂ → animal overpopulation","More transpiration → less rainfall"],
["Why are nitrogen-fixing bacteria essential?","Convert atmospheric N₂ to usable forms","Release O₂ for animals","Break down organic matter into nitrates","Transport nitrates into roots"],
["Fertilizer overuse causes algal bloom — which process disrupted?","Leaching of nitrates","Nitrogen fixation","Ammonification","Denitrification"],
["Deforestation affects the nitrogen cycle by","Losing plant stored nitrogen","Increasing N-fixers","Rapid nitrate accumulation","Stopping denitrification"],
["Human activities intensify the greenhouse effect via","Burning fossil fuels in vehicles and stoves","Coal powerplant CO₂ emissions","Reforestation (sequestration)","Burning garbage in facilities"],
["Which best defines biodiversity?","Variety of life forms","Number of ecosystems and endemic species","Rate of human population growth","Interaction of organisms at each level"],
["Why is biodiversity higher in tropical regions?","Stable climates & resources support diverse species","Wet & dry seasons support ecosystems","More sunlight reduces competition","Stronger winds disperse seeds"],
["Major cause of biodiversity loss","Deforestation & habitat destruction","Climate change","Invasive species","Pollution"],
["Overexploitation causes biodiversity loss because","Species removed faster than recovery","Species become endangered","Leads to extinction","Causes migration to polar regions"],
["Common strategy to conserve biodiversity","Protected areas (national parks)","Sustainable farming","Biotechnology & animal sanctuaries","Frequent pesticide use"],
["Sustainable resource use reduces biodiversity loss by","Using resources responsibly for future generations","Limiting polluting activities","Focusing only on endangered species","Preventing ecosystem regeneration"],
["Main purpose of environmental subjects in college","Teach ecosystems & human impact","Involve students in tree planting","Encourage waste segregation at home","Train for forestry jobs"],
["Why all students should study environment","Understanding issues builds responsible citizens","Population growth makes topics relevant","Reduces need for extra activities","Guarantees higher grades"],
["Example of invasive species in the Philippines","Chinese softshell turtle","Pangolin","Alocasia","Coconut crab"],
["How invasive species cause biodiversity loss","Compete for resources with native species","Higher reproduction rates (no predators)","Reduce pollution","Create new habitats for natives"],
["Poaching refers to","Illegal hunting and collecting plants or animals","Cooking eggs","Transferring wild animals to zoos","Harvesting plants from forests"]];
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;");
let S,done;
function start(){S=sh(Q).map(r=>({q:r[0],c:r[1],o:sh(r.slice(1)),a:null}));done=false;render();scrollTo(0,0)}
function pick(i,j){S[i].a=j;document.getElementById("n").textContent=S.filter(s=>s.a!==null).length}
function submit(){done=true;render();scrollTo(0,0)}
function render(){
 const sc=S.filter(s=>s.a!==null&&s.o[s.a]===s.c).length;
 let h='<div class="card hd"><h1>Long Exam: Environmental Science</h1><div class="mut">Choose the best answer for each question. Questions and choices are shuffled every attempt.</div>';
 if(done)h+=`<p class="sc">Score: <b>${sc} / ${S.length}</b> (${Math.round(sc/S.length*100)}%)</p><button onclick="start()">Try again</button>`;
 h+='</div>';
 S.forEach((s,i)=>{
  const right=s.a!==null&&s.o[s.a]===s.c;
  h+=`<section class="card">${done?`<span class="pts">${right?1:0}/1</span>`:''}<div class="q">${i+1}. ${esc(s.q)}</div>`;
  s.o.forEach((o,j)=>{
   const cls=done?(o===s.c?"ok":s.a===j?"bad":""):"";
   const mk=done?(o===s.c?"<b>✓</b>":s.a===j?"<b>✗</b>":""):"";
   h+=`<label class="opt ${cls}"><input type="radio" name="q${i}" ${s.a===j?"checked":""} ${done?"disabled":""} onchange="pick(${i},${j})"><span>${esc(o)}</span>${mk}</label>`;
  });
  if(done&&!right)h+=`<div class="fb">${s.a===null?"Not answered":"Incorrect"} — correct answer: ${esc(s.c)}</div>`;
  h+='</section>';
 });
 h+=done?'<button onclick="start()">Try again</button>':`<button onclick="submit()">Submit</button> <span class="mut">&nbsp;Answered <span id="n">${S.filter(s=>s.a!==null).length}</span>/${S.length}</span>`;
 document.getElementById("app").innerHTML=h;
}
start();