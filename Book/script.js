let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let  readingEl=document.getElementById("reading")
let quizEl=document.getElementById("quiz")
let infoBox=document.getElementById("info-box");
let darkMood=document.getElementById("darkmood");
let old =document.getElementById("old");
let span =document.getElementById("span");
let dialog =document.getElementById("dialog");
let jack =document.getElementById("jack");
let dialog1 =document.getElementById("dialog1");
let span1 =document.getElementById("span1");
let monkey =document.getElementById("monkey");
let dialog2 =document.getElementById("dialog2");
let span2 =document.getElementById("span2");
let ibong =document.getElementById("ibong");
let dialog3 =document.getElementById("dialog3");
let span3 =document.getElementById("span3");
let giant =document.getElementById("giant");
let dialog4 =document.getElementById("dialog4");
let span4 =document.getElementById("span4");
let lottory =document.getElementById("lottory");
let dialog5 =document.getElementById("dialog5");
let span5 =document.getElementById("span5");


menu.onclick = () =>{
       menu.classList.toggle('fa-times');
       navbar.classList.toggle('active');
   }
darkMood.onclick = function(){
       if(localStorage.getItem("them")==null){
       }


     document.body.classList.toggle("dark-them");
     if(document.body.classList.contains("dark-them")){
       darkMood.src="fas fa-sun";
       localStorage.setItem("them","dark");
     }else{
        darkMood.src="fas fa-moon";
        localStorage.setItem("them","light");
     }
}
if(localStorage.getItem("them")==null){
  localStorage.setItem("them", "light");     
}
let localData= localStorage.getItem("them");
if(localData=="light"){
       darkMood.src="fas fa-sun"
       document.body.classList.remove("dark-them");
       
}else if(localData=="dark"){
       darkMood.src="fas fa-sun";
       document.body.classList.add("dark-them");
}
old.onclick= function(){
       dialog.style.display ="block";
   }
span.onclick= function(){
       dialog.style.display ="none";
   }
jack.onclick= function(){
       dialog1.style.display ="block";
   }
span1.onclick= function(){
       dialog1.style.display ="none";
   }
monkey.onclick= function(){
       dialog2.style.display ="block";
   }
span2.onclick= function(){
       dialog2.style.display ="none";
   }
ibong.onclick= function(){
     dialog3.style.display ="block";
   }
span3.onclick= function(){
       dialog3.style.display ="none";
   }
giant.onclick= function(){
       dialog4.style.display ="block";
     }
span4.onclick= function(){
         dialog4.style.display ="none";
     }
lottory.onclick= function(){
       dialog5.style.display ="block";
     }
span5.onclick= function(){
         dialog5.style.display ="none";
     }
  













/*document.addEventListener("contextmenu",function(freelanceNasim){
       freelanceNasim.preventDefault();
   });
*/
function questioner(){
       readingEl.innerHTML= `
    <form name="quiz" id="quiz">
    <ul>
    <div id="class">1. Where did the old Man Lived?
           <li><input type="radio" name="questional" value="Village">A.Village</li>
           <li><input type="radio" name="questional" value="City">B.City</li>
           <li><input type="radio" name="questional" value="Town">C.Town</li>
           <li><input type="radio" name="questional" value="province">D.province</li>
     </div>
    <div id="class">2. What was the mood of the old man?
            <li> <input type="radio" name="questiona2" value="Happy">A.Happy</li>
            <li> <input type="radio" name="questiona2" value="Sad">B.Sad</li>
            <li><input type="radio" name="questiona2" value="Angry">C.Angry</li>
            <li><input type="radio" name="questiona2" value="Gloomy">D.Gloomy</li>
       </div>        
    <div id="class">3. Why did the people aviod the old man?
           <li><input type="radio" name="questiona3" value="Because His Lucky">A.Because hi Lucky</li>
           <li><input type="radio" name="questiona3" value="Because His Misfortune  was Contagious">B.Because His Misfortune  was Contagious </li>
           <li><input type="radio" name="questiona3" value="Because Hi Was Contagious">C.Because hi was Contagious</li>
           <li><input type="radio" name="questiona3" value="Because hi was unhappy">D.Because hi was unhappy</li>
       </div>        
    <div id="class">4. What did the people ask about the man?
           <li><input type="radio" name="questiona4" value="What Happened To You">A.What Happened To You</li>
           <li><input type="radio" name="questiona4" value="Where have you been">B.Where have you been</li>
           <li><input type="radio" name="questiona4" value="Are you alrigh">C.Are you alright</li>
           <li><input type="radio" name="questiona4" value="How are you doing">D.How are you doing</li>
</div>
    <div id="class">5.What is the Moral of the Story
           <li><input type="radio" name="questiona5" value="Chase Happiness. Enjoy Your Life">A.Chase Happiness. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Enjoy Your Life">B. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Don't Chase Happiness. Enjoy Your Life">C.Don't Chase Happiness. Enjoy Your Life</li>
           <li><input type="radio" name="questiona5" value="Happiness">D.Happiness</li>
        </ul>
        </div>
        </br></br>
       <button id="ready" onclick=" check()">Done </button>
       
    `
}
function check(){
    var c=0;
    var q1=document.quiz.questional.value;
    var q2=document.quiz.questiona2.value;
    var q3=document.quiz.questiona3.value;
    var q4=document.quiz.questiona4.value;
    var q5=document.quiz.questiona5.value;
    if (q1=="Village") {c++}
    if (q2=="Gloomy") {c++}
    if (q3=="Because His Misfortune  was Contagious") {c++}
    if (q4=="What Happened To You") {c++}
    if (q5=="Don't Chase Happiness. Enjoy Your Life") {c++}
    quiz.innerHTML = `

    <div class="result">
           <h2>You answered ${c}/5 questions correctly</h2>

           <a href="index.html" class="Home">Done</a> 
    </div>
           `


}
function questioner1(){
       readingEl.innerHTML= `
       <form name="quiz1" id="quiz1">
       <i id="darkmood"class="fas fa-moon"></i>
       <ul>
       <div id="class">1.What was the name of the cow? 
       <li> <input type="radio" name="questiona1" value="Magic.">A.  Magic</li>
       <li> <input type="radio" name="questiona1" value="Bessie">B.  Bessie</li>
       <li><input type="radio" name="questiona1" value="Buttercup">C.  Buttercup</li>
       <li><input type="radio" name="questiona1" value="Bessy">D.  Bessy</li>
       </div>
       <div id="class">2.What was the shape of the castle ?
              <li> <input type="radio" name="questiona2" value="Rectangular Castle">A.  Rectangular Castle</li>
              <li> <input type="radio" name="questiona2" value="Triangle Castle">B.  Triangle Castle</li>
              <li><input type="radio" name="questiona2" value="Square Castle">C.  Square Castle</li>
              <li><input type="radio" name="questiona2" value="Circular Castle">D.  Circular Castle</li>
       </div>          
      <div id="class">3.What did jack trade in old milking cow for?
             <li><input type="radio" name="questiona3" value="Magical Beans">A.  Magical Beans</li>
             <li><input type="radio" name="questiona3" value="A new clothes">B.  A new clothes</li>
             <li><input type="radio" name="questiona3" value="A new Toy">C. A new Toy</li>
             <li><input type="radio" name="questiona3" value=" Magical Seeds">D. Magical Seeds</li>
       </div>          
      <div id="class">4.what did the giant want to do with jack?
             <li><input type="radio" name="questiona4" value="Catch him and make him sing">A.Catch him and make him sing </li>
             <li><input type="radio" name="questiona4" value="Play with Him">B. Play with Him</li>
             <li><input type="radio" name="questiona4" value="Feed him a Nice, Big Breakfast">C.Feed him a Nice, Big Breakfast</li>
             <li><input type="radio" name="questiona4" value="Broiled On Toast and Grind  His Bones ">D. Broiled On Toast and Grind  His Bones </li>
       </div>
      <div id="class">5. What did jack do with the Golden Eggs
             <li><input type="radio" name="questiona5" value="Hi bought back Old Bessy">A.Hi bought back Old Bessy,</li>
             <li><input type="radio" name="questiona5" value="Hi bought another magical beans">B. Hi bought another magical beans</li>
             <li><input type="radio" name="questiona5" value="Hi went in town to give everyone holding eggs">C.Hi went in town to give everyone holding eggs</li>
             <li><input type="radio" name="questiona5" value="Hi use the golden eggs to buy a new house">D.Hi use the golden eggs to buy a new house</li>
       </div
       ></ul>
       </br></br>
       <button id="ready" onclick="check1()">Done </button>
       `
}
function check1(){
       var c=0;
       var q1=document.quiz1.questiona1.value;
       var q2=document.quiz1.questiona2.value;
       var q3=document.quiz1.questiona3.value;
       var q4=document.quiz1.questiona4.value;
       var q5=document.quiz1.questiona5.value;
       if (q1=="Bessy") {c++}
       if (q2=="Square Castle") {c++}
       if (q3=="Magical Beans") {c++}
       if (q4=="Broiled On Toast and Grind  His Bones ") {c++}
       if (q5=="Hi bought back Old Bessy") {c++}
       quiz1.innerHTML = `
       <h2>You answered ${c}/5 questions correctly</h2>
   
       <a href="index.html" class="Home">Done</a>
       `
   
} 
function Part2(){
       readingEl.innerHTML=`
       <p> 
       Part II 
       </br></br> 
In the brightness of the wintry sun next morning as it streamed over the breakfast table he laughed at his fears. There was an air of prosaic wholesomeness about the room which it had lacked on the previous night, and the dirty, shriveled little paw was pitched on the side-board with a carelessness which betokened no great belief in its virtues. 
</br></br> 
"I suppose all old soldiers are the same," said Mrs White. "The idea of our listening to such nonsense! How could wishes be granted in these days? And if they could, how could two hundred pounds hurt you, father?" 
</br></br> 
"Might drop on his head from the sky," said the frivolous Herbert. 
</br></br> 
"Morris said the things happened so naturally," said his father, "that you might if you so wished attribute it to coincidence." 
</br></br> 
"Well don't break into the money before I come back," said Herbert as he rose from the table. "I'm afraid it'll turn you into a mean, avaricious man, and we shall have to disown you." 
</br></br> 
His mother laughed, and following him to the door, watched him down the road; and returning to the breakfast table, was very happy at the expense of her husband's credulity. All of which did not prevent her from scurrying to the door at the postman's knock, nor prevent her from referring somewhat shortly to retired Sergeant-Majors of bibulous habits when she found that the post brought a tailor's bill. 
</br></br> 
"Herbert will have some more of his funny remarks, I expect, when he comes home," she said as they sat at dinner. 
</br></br> 
"I dare say," said Mr. White, pouring himself out some beer; "but for all that, the thing moved in my hand; that I'll swear to." 
</br></br> 
"You thought it did," said the old lady soothingly. 
</br></br> 
"I say it did," replied the other. "There was no thought about it; I had just - What's the matter?" 
</br></br> 
His wife made no reply. She was watching the mysterious movements of a man outside, who, peering in an undecided fashion at the house, appeared to be trying to make up his mind to enter. In mental connexion with the two hundred pounds, she noticed that the stranger was well dressed, and wore a silk hat of glossy newness. Three times he paused at the gate, and then walked on again. The fourth time he stood with his hand upon it, and then with sudden resolution flung it open and walked up the path. Mrs White at the same moment placed her hands behind her, and hurriedly unfastening the strings of her apron, put that useful article of apparel beneath the cushion of her chair. 
</br></br> 
She brought the stranger, who seemed ill at ease, into the room. He gazed at her furtively, and listened in a preoccupied fashion as the old lady apologized for the appearance of the room, and her husband's coat, a garment which he usually reserved for the garden. She then waited as patiently as her sex would permit for him to broach his business, but he was at first strangely silent. 
</br></br> 
"I - was asked to call," he said at last, and stooped and picked a piece of cotton from his trousers. "I come from 'Maw and Meggins.' " 
</br></br> 
The old lady started. "Is anything the matter?" she asked breathlessly. "Has anything happened to Herbert? What is it? What is it? 
</br></br> 
Her husband interposed. "There there mother," he said hastily. "Sit down, and don't jump to conclusions. You've not brought bad news, I'm sure sir," and eyed the other wistfully. 
</br></br> 
"I'm sorry - " began the visitor. 
</br></br> 
"Is he hurt?" demanded the mother wildly. 
</br></br> 
The visitor bowed in assent."Badly hurt," he said quietly, "but he is not in any pain." 
</br></br> 
"Oh thank God!" said the old woman, clasping her hands. "Thank God for that! Thank - " 
</br></br> 
She broke off as the sinister meaning of the assurance dawned on her and she saw the awful confirmation of her fears in the others averted face. She caught her breath, and turning to her slower-witted husband, laid her trembling hand on his. There was a long silence. 
</br></br> 
"He was caught in the machinery," said the visitor at length in a low voice. 
</br></br> 
"Caught in the machinery," repeated Mr. White, in a dazed fashion,"yes." 
</br></br> 
He sat staring out the window, and taking his wife's hand between his own, pressed it as he had been wont to do in their old courting days nearly forty years before. 
</br></br> 
"He was the only one left to us," he said, turning gently to the visitor. "It is hard." 
</br></br> 
The other coughed, and rising, walked slowly to the window. " The firm wishes me to convey their sincere sympathy with you in your great loss," he said, without looking round. "I beg that you will understand I am only their servant and merely obeying orders." 
</br></br> 
There was no reply; the old woman’s face was white, her eyes staring, and her breath inaudible; on the husband's face was a look such as his friend the sergeant might have carried into his first action. 
</br></br> 
"I was to say that Maw and Meggins disclaim all responsibility," continued the other. "They admit no liability at all, but in consideration of your son's services, they wish to present you with a certain sum as compensation." 
</br></br> 
Mr. White dropped his wife's hand, and rising to his feet, gazed with a look of horror at his visitor. His dry lips shaped the words, "How much?" 
</br></br> 
"Two hundred pounds," was the answer. 
</br></br> 
Unconscious of his wife's shriek, the old man smiled faintly, put out his hands like a sightless man, and dropped, a senseless heap, to the floor.
       </p>
       </br></br> 
       <button onclick="Part3()" id="ready">Next</button>
       `
}
function Part3(){
  readingEl.innerHTML=`
  <p>
  Part III 
  </br></br> 

In the huge new cemetery, some two miles distant, the old people buried their dead, and came back to the house steeped in shadows and silence. It was all over so quickly that at first they could hardly realize it, and remained in a state of expectation as though of something else to happen - something else which was to lighten this load, too heavy for old hearts to bear. 
</br></br> 
But the days passed, and expectations gave way to resignation - the hopeless resignation of the old, sometimes mis-called apathy. Sometimes they hardly exchanged a word, for now they had nothing to talk about, and their days were long to weariness. 
</br></br> 
It was about a week after that the old man, waking suddenly in the night, stretched out his hand and found himself alone. The room was in darkness, and the sound of subdued weeping came from the window. He raised himself in bed and listened. 
</br></br> 
"Come back," he said tenderly. "You will be cold." 
</br></br> 
"It is colder for my son," said the old woman, and wept afresh. 
</br></br> 
The sounds of her sobs died away on his ears. The bed was warm, and his eyes heavy with sleep. He dozed fitfully, and then slept until a sudden wild cry from his wife awoke him with a start. 
</br></br> 
"THE PAW!" she cried wildly. "THE MONKEY'S PAW!" 
</br></br> 
He started up in alarm. "Where? Where is it? What’s the matter?" 
</br></br> 
She came stumbling across the room toward him. "I want it," she said quietly. "You've not destroyed it?" 
</br></br> 
"It's in the parlour, on the bracket," he replied, marveling. "Why?" 
</br></br> 
She cried and laughed together, and bending over, kissed his cheek. 
</br></br> 
"I only just thought of it," she said hysterically. "Why didn't I think of it before? Why didn't you think of it?" 
</br></br> 
"Think of what?" he questioned. 
</br></br> 
"The other two wishes," she replied rapidly. "We've only had one." 
</br></br> 
"Was not that enough?" he demanded fiercely. 
</br></br> 
"No," she cried triumphantly; "We'll have one more. Go down and get it quickly, and wish our boy alive again." 
</br></br> 
The man sat in bed and flung the bedclothes from his quaking limbs."Good God, you are mad!" he cried aghast. "Get it," she panted; "get it quickly, and wish - Oh my boy, my boy!" 
</br></br> 
Her husband struck a match and lit the candle. "Get back to bed he said unsteadily. "You don't know what you are saying." 
</br></br> 
"We had the first wish granted," said the old woman, feverishly; "why not the second?" 
</br></br> 
"A coincidence," stammered the old man. 
</br></br> 
"Go get it and wish," cried his wife, quivering with excitement. 
</br></br> 
The old man turned and regarded her, and his voice shook. "He has been dead ten days, and besides he - I would not tell you else, but - I could only recognize him by his clothing. If he was too terrible for you to see then, how now?" 
</br></br> 
"Bring him back," cried the old woman, and dragged him towards the door. "Do you think I fear the child I have nursed?" 
</br></br> 
He went down in the darkness, and felt his way to the parlour, and then to the mantlepiece. The talisman was in its place, and a horrible fear that the unspoken wish might bring his mutilated son before him ere he could escape from the room seized up on him, and he caught his breath as he found that he had lost the direction of the door. His brow cold with sweat, he felt his way round the table, and groped along the wall until he found himself in the small passage with the unwholesome thing in his hand. 
</br></br> 
Even his wife's face seemed changed as he entered the room. It was white and expectant, and to his fears seemed to have an unnatural look upon it. He was afraid of her. 
</br></br> 
"WISH!" she cried in a strong voice. 
</br></br> 
"It is foolish and wicked," he faltered. 
</br></br> 
"WISH!" repeated his wife. 
</br></br> 
He raised his hand. "I wish my son alive again." 
</br></br> 
The talisman fell to the floor, and he regarded it fearfully. Then he sank trembling into a chair as the old woman, with burning eyes, walked to the window and raised the blind. 
</br></br> 
He sat until he was chilled with the cold, glancing occasionally at the figure of the old woman peering through the window. The candle-end, which had burned below the rim of the china candlestick, was throwing pulsating shadows on the ceiling and walls, until with a flicker larger than the rest, it expired. The old man, with an unspeakable sense of relief at the failure of the talisman, crept back back to his bed, and a minute afterward the old woman came silently and apathetically beside him. 
</br></br> 
Neither spoke, but sat silently listening to the ticking of the clock. A stair creaked, and a squeaky mouse scurried noisily through the wall. The darkness was oppressive, and after lying for some time screwing up his courage, he took the box of matches, and striking one, went downstairs for a candle. 
</br></br> 
At the foot of the stairs the match went out, and he paused to strike another; and at the same moment a knock came so quiet and stealthy as to be scarcely audible, sounded on the front door. 
</br></br> 
The matches fell from his hand and spilled in the passage. He stood motionless, his breath suspended until the knock was repeated. Then he turned and fled swiftly back to his room, and closed the door behind him. A third knock sounded through the house. 
</br></br> 
"WHAT’S THAT?" cried the old woman, starting up. 
</br></br> 
"A rat," said the old man in shaking tones - "a rat. It passed me on the stairs." 
</br></br> 
His wife sat up in bed listening. A loud knock resounded through the house. 
</br></br> 
"It's Herbert!" 
</br></br> 
She ran to the door, but her husband was before her, and catching her by the arm, held her tightly. 
</br></br> 
"What are you going to do?" he whispered hoarsely. 
</br></br> 
"It's my boy; it's Herbert!" she cried, struggling mechanically. "I forgot it was two miles away. What are you holding me for? Let go. I must open the door." 
</br></br> 
"For God's sake don't let it in," cried the old man, trembling. 
</br></br> 
"You're afraid of your own son," she cried struggling. "Let me go. I'm coming, Herbert; I'm coming." 
</br></br> 
There was another knock, and another. The old woman with a sudden wrench broke free and ran from the room. Her husband followed to the landing, and called after her appealingly as she hurried downstairs. He heard the chain rattle back and the bolt drawn slowly and stiffly from the socket. Then the old woman’s voice, strained and panting. 
</br></br> 
"The bolt," she cried loudly. "Come down. I can't reach it." 
</br></br> 
But her husband was on his hands and knees groping wildly on the floor in search of the paw. If only he could find it before the thing outside got in. A perfect fusillade of knocks reverberated through the house, and he heard the scraping of a chair as his wife put it down in the passage against the door. He heard the creaking of the bolt as it came slowly back, and at the same moment he found the monkey's paw, and frantically breathed his third and last wish. 
</br></br> 
The knocking ceased suddenly, although the echoes of it were still in the house. He heard the chair drawn back, and the door opened. A cold wind rushed up the staircase, and a long loud wail of disappointment and misery from his wife gave him the courage to run down to her side, and then to the gate beyond. The street lamp flickering opposite shone on a quiet and deserted road. 
  </p>
  <button onclick="questioner2()" id="ready">Next</button>
  `
}
function questioner2(){
       readingEl.innerHTML= `
       <form name="quiz2" id="quiz2">
       <ul>
       <div id="class">1.How does the setting at the beginning set the mood for the story? 
       <li> <input type="radio" name="questiona1" value="Helps set a depressing mood.">A.Helps set a depressing mood.</li>
       <li> <input type="radio" name="questiona1" value="Helps set a happy, smelling-flowers mood">B.Helps set a happy, smelling-flowers mood.</li>
       <li><input type="radio" name="questiona1" value="Helps set a sombre, mysterious mood">C.Helps set a sombre, mysterious mood</li>
       <li><input type="radio" name="questiona1" value="What is mood?">D.What is mood?</li>
       </div>
       <div id="class">2.Which event in "The Monkey's Paw" signals the resolution of the story?
              <li> <input type="radio" name="questiona2" value="Sergeant Major Morris visits the Whites.">A.Sergeant Major Morris visits the Whites.</li>
              <li> <input type="radio" name="questiona2" value="Mr. White searches for the monkey's paw to make a third wish.">B.Mr. White searches for the monkey's paw to make a third wish.</li>
              <li><input type="radio" name="questiona2" value="Mr. White makes his second wish on the paw.">C.Mr. White makes his second wish on the paw.</li>
              <li><input type="radio" name="questiona2" value="There was no one at the door when Mr. White looks out.">D.There was no one at the door when Mr. White looks out.</li>
        </div>          
      <div id="class">3.Using inference, why did Sgt. Morris decide not to sell the paw?
             <li><input type="radio" name="questiona3" value="He wanted to keep all the wishes for himself.">A.He wanted to keep all the wishes for himself.</li>
             <li><input type="radio" name="questiona3" value="The paw was a gift from his great-grandfather.">B.The paw was a gift from his great-grandfather.</li>
             <li><input type="radio" name="questiona3" value="If he sold the paw, he'd be cursed.s">C.If he sold the paw, he'd be cursed.</li>
             <li><input type="radio" name="questiona3" value="The paw was evil.">D.The paw was evil.</li>
       </div>          
      <div id="class">4. What was special about the paw?
             <li><input type="radio" name="questiona4" value="The paw granted unlimited wishes">A.The paw granted unlimited wishes</li>
             <li><input type="radio" name="questiona4" value="The paw was a valuable artifact.">B.The paw was a valuable artifact.</li>
             <li><input type="radio" name="questiona4" value="The paw granted 3 wishes.">C.The paw granted 3 wishes.</li>
             <li><input type="radio" name="questiona4" value="The paw belonged to a famous king.">D.The paw belonged to a famous king.</li>
       </div>
      <div id="class">5.What mood do you find in the story when the Whites stop speaking to one another after Herbert's death?
             <li><input type="radio" name="questiona5" value="hopeless grief">A.hopeless grief</li>
             <li><input type="radio" name="questiona5" value="hurtful anger">B.hurtful anger </li>
             <li><input type="radio" name="questiona5" value="quiet thought">C.quiet thought</li>
             <li><input type="radio" name="questiona5" value="silent blame">D.silent blame</li>
       </div>
       </ul>
       </br></br>
       <button id="ready" onclick="check2()">Done </button>
       `
}
function check2(){
       var c=0;
       var q1=document.quiz2.questiona1.value;
       var q2=document.quiz2.questiona2.value;
       var q3=document.quiz2.questiona3.value;
       var q4=document.quiz2.questiona4.value;
       var q5=document.quiz2.questiona5.value;
       if (q1=="Helps set a sombre, mysterious mood") {c++}
       if (q2=="There was no one at the door when Mr. White looks out.") {c++}
       if (q3=="The paw was evil.") {c++}
       if (q4=="The paw granted 3 wishes.") {c++}
       if (q5=="silent blame") {c++}
       quiz2.innerHTML = `
              <h2>You answered ${c}/5 questions correctly</h2>
   
              <a href="index.html" class="Home">Done</a>
              `
   
   
}
function questioner3(){
       readingEl.innerHTML= `
       <form name="quiz3" id="quiz3">
       <ul>
       <div id="class">1.Ilan ang anak ni Haring Fernando? 
       <li> <input type="radio" name="questiona1" value="1">A.1</li>
       <li> <input type="radio" name="questiona1" value="3">B.3</li>
       <li><input type="radio" name="questiona1" value="2">C.2</li>
       <li><input type="radio" name="questiona1" value="4">D.4</li>
       </div>
       <div id="class">2.Saang bundok daw matatagpuan ang ibong adarna? 
              <li> <input type="radio" name="questiona2" value="Makiling">A.Makiling</li>
              <li> <input type="radio" name="questiona2" value="Apo">B.Apo</li>
              <li><input type="radio" name="questiona2" value="Arayat">C.Arayat</li>
              <li><input type="radio" name="questiona2" value="Tabor">D.Tabor</li>
       </div>          
      <div id="class">3.Ano ang pangalan ng kaharian?
             <li><input type="radio" name="questiona3" value="Albania">A.Albania</li>
             <li><input type="radio" name="questiona3" value="Encantadia">B.Encantadia</li>
             <li><input type="radio" name="questiona3" value="Berbanya">C.Berbanya</li>
             <li><input type="radio" name="questiona3" value="Hatoria">D.Hatoria</li>
       </div>          
      <div id="class">4.Sino ang panganay sa magkakapatid?
             <li><input type="radio" name="questiona4" value="Don Pedro">A.Don Pedro</li>
             <li><input type="radio" name="questiona4" value="Don Juan">B.Don Juan</li>
             <li><input type="radio" name="questiona4" value="Don Diego">C.Don Diego</li>
             <li><input type="radio" name="questiona4" value="Don Tiago">D.Don Tiago</li>
       </div>
      <div id="class">5.Sino ang nagtagumpay na kunin ang ibon?
             <li><input type="radio" name="questiona5" value="Don Pedro">A.Don Pedro</li>
             <li><input type="radio" name="questiona5" value="Don Juan">B.Don Juan </li>
             <li><input type="radio" name="questiona5" value="Don Diego">C.Don Diego</li>
             <li><input type="radio" name="questiona5" value="Don Tiago">D.Don Tiago</li>
       </div> 
       </ul>
       </br></br>
       <button id="ready" onclick="check3()">Done </button>
       `
}
function check3(){
       var c=0;
       var q1=document.quiz3.questiona1.value;
       var q2=document.quiz3.questiona2.value;
       var q3=document.quiz3.questiona3.value;
       var q4=document.quiz3.questiona4.value;
       var q5=document.quiz3.questiona5.value;
       if (q1=="3") {c++}
       if (q2=="Tabor") {c++}
       if (q3=="Berbanya") {c++}
       if (q4=="Don Pedro") {c++}
       if (q5=="Don Juan") {c++}
       quiz3.innerHTML = `
       <h2>You answered ${c}/5 questions correctly</h2>
          
       <a href="index.html" class="Home">Done</a>
              `
          
} 
function questioner4(){
readingEl.innerHTML= `
       <form name="quiz4" id="quiz4">
       <ul>
       <div id="class">1.The children stopped their games to? 
       <li> <input type="radio" name="questiona1" value="look at the beauty">A.look at the beauty</li>
       <li> <input type="radio" name="questiona1" value=" Rat fruit in the garden">B. Eat fruit in the garden</li>
       <li><input type="radio" name="questiona1" value="pick beautiful flowers">C.pick beautiful flowers</li>
       <li><input type="radio" name="questiona1" value=" listen to the birds">D. listen to the birds</li>
       </div>
       <div id="class">2.The Giant was angry when he saw? 
              <li> <input type="radio" name="questiona2" value="the wall broken">A.the wall broken</li>
              <li> <input type="radio" name="questiona2" value=" the trees fallen">B. the trees fallen</li>
              <li><input type="radio" name="questiona2" value="the children playing">C.the children playing</li>
              <li><input type="radio" name="questiona2" value="the birds singing">D.the birds singing</li>
       </div>          
      <div id="class">3.The Giant thought that the children in his garden were?
             <li><input type="radio" name="questiona3" value="playful">A.playful</li>
             <li><input type="radio" name="questiona3" value="dirty">B.dirty</li>
             <li><input type="radio" name="questiona3" value="beautiful">C.beautiful</li>
             <li><input type="radio" name="questiona3" value="trespassers">D.trespassers</li>
       </div>          
      <div id="class">4.He was selfish because he thought that his garden?
             <li><input type="radio" name="questiona4" value="was a rare beauty">A.was a rare beauty</li>
             <li><input type="radio" name="questiona4" value=" was for him only">B. was for him only</li>
             <li><input type="radio" name="questiona4" value=" was not for spring">C. was not for spring</li>
             <li><input type="radio" name="questiona4" value="for the little boy">D.for the little boy</li>
       </div>
      <div id="class">5.The Nature was unhappy with the giant because?
             <li><input type="radio" name="questiona5" value="he would not allow the children">A.he would not allow the children</li>
             <li><input type="radio" name="questiona5" value="he would not water the plants properly to play">B.he would not water the plants properly to play </li>
             <li><input type="radio" name="questiona5" value="he was very cruel">C.he was very cruel</li>
             <li><input type="radio" name="questiona5" value="he loved cold and frost">D.he loved cold and frost</li>
       </div> 
       </ul>
       </br></br>
<button id="ready" onclick="check4()">Done </button> `
}
function check4(){
       var c=0;
       var q1=document.quiz4.questiona1.value;
       var q2=document.quiz4.questiona2.value;
       var q3=document.quiz4.questiona3.value;
       var q4=document.quiz4.questiona4.value;
       var q5=document.quiz4.questiona5.value;
       if (q1=="listen to the birds") {c++}
       if (q2=="the children playing") {c++}
       if (q3=="trespassers") {c++}
       if (q4=="was for him only") {c++}
       if (q5=="he would not allow the children") {c++}
       quiz4.innerHTML = `
       <div class="result">
       <h2>You answered ${c}/5 questions correctly</h2>

       <a href="index.html" class="Home">Done</a> 
       </div>
              `
          
} 
function nextchapter(){
       readingEl.innerHTML=`
       <p>
       The people had done it so many times that they only half listened to the directions; most of them were quiet, wetting their lips, not looking around. Then Mr. Summers raised one hand high and said, “Adams.” A man disengaged himself from the crowd and came forward. “Hi, Steve,” Mr. Summers said, and Mr. Adams said, “Hi, Joe.” They grinned at one another humorlessly and nervously. Then Mr. Adams reached into the black box and took out a folded paper. He held it firmly by one corner as he turned and went hastily back to his place in the crowd, where he stood a little apart from his family, not looking down at his hand.
       </br></br>
“Allen,” Mr. Summers said. “Anderson. . . . Bentham.”
</br></br>
“Seems like there’s no time at all between lotteries any more,” Mrs. Delacroix said to Mrs. Graves in the back row. “Seems like we got through with the last one only last week.”
</br></br>
“Time sure goes fast,” Mrs. Graves said.
</br></br>
“Clark. . . . Delacroix.”
</br></br>
“There goes my old man,” Mrs. Delacroix said. She held her breath while her husband went forward.
</br></br>
“Dunbar,” Mr. Summers said, and Mrs. Dunbar went steadily to the box while one of the women said, “Go on, Janey,” and another said, “There she goes.”
</br></br>
“We’re next,” Mrs. Graves said. She watched while Mr. Graves came around from the side of the box, greeted Mr. Summers gravely, and selected a slip of paper from the box. By now, all through the crowd there were men holding the small folded papers in their large hands, turning them over and over nervously. Mrs. Dunbar and her two sons stood together, Mrs. Dunbar holding the slip of paper.
</br></br>
“Harburt. . . . Hutchinson.”
</br></br>
“Get up there, Bill,” Mrs. Hutchinson said, and the people near her laughed.
</br></br>
“Jones.”
</br></br>
“They do say,” Mr. Adams said to Old Man Warner, who stood next to him, “that over in the north village they’re talking of giving up the lottery.”
</br></br>
Old Man Warner snorted. “Pack of crazy fools,” he said. “Listening to the young folks, nothing’s good enough for them. Next thing you know, they’ll be wanting to go back to living in caves, nobody work any more, live that way for a while. Used to be a saying about ‘Lottery in June, corn be heavy soon.’ First thing you know, we’d all be eating stewed chickweed and acorns. There’s always been a lottery,” he added petulantly. “Bad enough to see young Joe Summers up there joking with everybody.”
</br></br>
“Some places have already quit lotteries,” Mrs. Adams said.
</br></br>
“Nothing but trouble in that,” Old Man Warner said stoutly. “Pack of young fools.”
</br></br>
“Martin.” And Bobby Martin watched his father go forward. “Overdyke. . . . Percy.”
</br></br>
“I wish they’d hurry,” Mrs. Dunbar said to her older son. “I wish they’d hurry.”
</br></br>
“They’re almost through,” her son said.
</br></br>
“You get ready to run tell Dad,” Mrs. Dunbar said.
</br></br>
Mr. Summers called his own name and then stepped forward precisely and selected a slip from the box. Then he called, “Warner.”
</br></br>
“Seventy-seventh year I been in the lottery,” Old Man Warner said as he went through the crowd. “Seventy-seventh time.”
</br></br>
“Watson.” The tall boy came awkwardly through the crowd. Someone said, “Don’t be nervous, Jack,” and Mr. Summers said, “Take your time, son.”
</br></br>
“Zanini.”
</br></br>
After that, there was a long pause, a breathless pause, until Mr. Summers, holding his slip of paper in the air, said, “All right, fellows.” For a minute, no one moved, and then all the slips of paper were opened. Suddenly, all the women began to speak at once, saying, “Who is it?,” “Who’s got it?,” “Is it the Dunbars?,” “Is it the Watsons?” Then the voices began to say, “It’s Hutchinson. It’s Bill,” “Bill Hutchinson’s got it.”
</br></br>
“Go tell your father,” Mrs. Dunbar said to her older son.
</br></br>
People began to look around to see the Hutchinsons. Bill Hutchinson was standing quiet, staring down at the paper in his hand. Suddenly, Tessie Hutchinson shouted to Mr. Summers, “You didn’t give him time enough to take any paper he wanted. I saw you. It wasn’t fair!”
</br></br>
“Be a good sport, Tessie,” Mrs. Delacroix called, and Mrs. Graves said, “All of us took the same chance.”
</br></br>
“Shut up, Tessie,” Bill Hutchinson said.
</br></br>
“Well, everyone,” Mr. Summers said, “that was done pretty fast, and now we’ve got to be hurrying a little more to get done in time.” He consulted his next list. “Bill,” he said, “you draw for the Hutchinson family. You got any other households in the Hutchinsons?”
</br></br>
“There’s Don and Eva,” Mrs. Hutchinson yelled. “Make them take their chance!”
</br></br>
“Daughters draw with their husbands’ families, Tessie,” Mr. Summers said gently. “You know that as well as anyone else.”
</br></br>
“It wasn’t fair,” Tessie said.
</br></br>
“I guess not, Joe,” Bill Hutchinson said regretfully. “My daughter draws with her husband’s family, that’s only fair. And I’ve got no other family except the kids.”
</br></br>
“Then, as far as drawing for families is concerned, it’s you,” Mr. Summers said in explanation, “and as far as drawing for households is concerned, that’s you, too. Right?”
</br></br>
“Right,” Bill Hutchinson said.
</br></br>
“How many kids, Bill?” Mr. Summers asked formally.
</br></br>
“Three,” Bill Hutchinson said. “There’s Bill, Jr., and Nancy, and little Dave. And Tessie and me.”
</br></br>
“All right, then,” Mr. Summers said. “Harry, you got their tickets back?”
</br></br>
Mr. Graves nodded and held up the slips of paper. “Put them in the box, then,” Mr. Summers directed. “Take Bill’s and put it in.”
</br></br>
“I think we ought to start over,” Mrs. Hutchinson said, as quietly as she could. “I tell you it wasn’t fair. You didn’t give him time enough to choose. _Every_body saw that.”
</br></br>

       </p>
       <button onclick="nextchapter1()" id="ready">Ready</button>
         `
}
function nextchapter1(){
       readingEl.innerHTML=`
       <p>
Mr. Graves had selected the five slips and put them in the box, and he dropped all the papers but those onto the ground, where the breeze caught them and lifted them off.
</br></br>
“Listen, everybody,” Mrs. Hutchinson was saying to the people around her.
</br></br>
“Ready, Bill?” Mr. Summers asked, and Bill Hutchinson, with one quick glance around at his wife and children, nodded.
</br></br>
“Remember,” Mr. Summers said, “take the slips and keep them folded until each person has taken one. Harry, you help little Dave.” Mr. Graves took the hand of the little boy, who came willingly with him up to the box. “Take a paper out of the box, Davy,” Mr. Summers said. Davy put his hand into the box and laughed. “Take just one paper,” Mr. Summers said. “Harry, you hold it for him.” Mr. Graves took the child’s hand and removed the folded paper from the tight fist and held it while little Dave stood next to him and looked up at him wonderingly.
</br></br>
“Nancy next,” Mr. Summers said. Nancy was twelve, and her school friends breathed heavily as she went forward, switching her skirt, and took a slip daintily from the box. “Bill, Jr.,” Mr. Summers said, and Billy, his face red and his feet overlarge, nearly knocked the box over as he got a paper out. “Tessie,” Mr. Summers said. She hesitated for a minute, looking around defiantly, and then set her lips and went up to the box. She snatched a paper out and held it behind her.
</br></br>
“Bill,” Mr. Summers said, and Bill Hutchinson reached into the box and felt around, bringing his hand out at last with the slip of paper in it.
</br></br>
The crowd was quiet. A girl whispered, “I hope it’s not Nancy,” and the sound of the whisper reached the edges of the crowd.
</br></br>
“It’s not the way it used to be,” Old Man Warner said clearly. “People ain’t the way they used to be.”
</br></br>
“All right,” Mr. Summers said. “Open the papers. Harry, you open little Dave’s.”
</br></br>
Mr. Graves opened the slip of paper and there was a general sigh through the crowd as he held it up and everyone could see that it was blank. Nancy and Bill, Jr., opened theirs at the same time, and both beamed and laughed, turning around to the crowd and holding their slips of paper above their heads.
</br></br>
“Tessie,” Mr. Summers said. There was a pause, and then Mr. Summers looked at Bill Hutchinson, and Bill unfolded his paper and showed it. It was blank.
</br></br>
“It’s Tessie,” Mr. Summers said, and his voice was hushed. “Show us her paper, Bill.”
</br></br>
Bill Hutchinson went over to his wife and forced the slip of paper out of her hand. It had a black spot on it, the black spot Mr. Summers had made the night before with the heavy pencil in the coal-company office. Bill Hutchinson held it up, and there was a stir in the crowd.
</br></br>
“All right, folks,” Mr. Summers said. “Let’s finish quickly.”
</br></br>
Although the villagers had forgotten the ritual and lost the original black box, they still remembered to use stones. The pile of stones the boys had made earlier was ready; there were stones on the ground with the blowing scraps of paper that had come out of the box. Mrs. Delacroix selected a stone so large she had to pick it up with both hands and turned to Mrs. Dunbar. “Come on,” she said. “Hurry up.”
</br></br>
Mrs. Dunbar had small stones in both hands, and she said, gasping for breath. “I can’t run at all. You’ll have to go ahead and I’ll catch up with you.”
</br></br>
The children had stones already, and someone gave little Davy Hutchinson a few pebbles.
</br></br>
Tessie Hutchinson was in the center of a cleared space by now, and she held her hands out desperately as the villagers moved in on her. “It isn’t fair,” she said. A stone hit her on the side of the head.
</br></br>
Old Man Warner was saying, “Come on, come on, everyone.” Steve Adams was in the front of the crowd of villagers, with Mrs. Graves beside him.
</br></br>
“It isn’t fair, it isn’t right,” Mrs. Hutchinson screamed, and then they were upon her. ♦
</br></br>
       </p>
       <button onclick="questioner5()" id="ready">Ready</button>
       `
}
function questioner5(){
       readingEl.innerHTML= `
       <form name="quiz5" id="quiz5">
       <ul>
       <div id="class">1.What can be seen on the slip of the paper of the winner of the lottery?? 
       <li> <input type="radio" name="questiona1" value="nothingy">A.nothing</li>
       <li> <input type="radio" name="questiona1" value=" red x">B.red x</li>
       <li><input type="radio" name="questiona1" value="black spot">C.black spot</li>
       <li><input type="radio" name="questiona1" value=" orange square">D. orange square</li>
       </div>
       <div id="class">2.What is Old Man Warner’s reaction upon hearing that other towns have either given up the lottery or are considering doing so?? 
              <li> <input type="radio" name="questiona2" value="He laughs">A.He laughs</li>
              <li> <input type="radio" name="questiona2" value=" He says its a good idea">B. He says its a good idea</li>
              <li><input type="radio" name="questiona2" value="He begins to weep">C.He begins to weep</li>
              <li><input type="radio" name="questiona2" value="He says it will lead to nothing but trouble">D.He says it will lead to nothing but trouble</li>
       </div>          
      <div id="class">3.At the end of the story, who wins the lottery??
             <li><input type="radio" name="questiona3" value="Bill">A.Bill</li>
             <li><input type="radio" name="questiona3" value="Nancy">B.Nancy</li>
             <li><input type="radio" name="questiona3" value="Bill Jr">C.Bill Jr</li>
             <li><input type="radio" name="questiona3" value="Tessie">D.Tessie</li>
       </div>          
      <div id="class">4. How does the mood change throughout the story??
             <li><input type="radio" name="questiona4" value="The author begins with calmness and tranquility, but she ultimately shifts the reader to shock and confusion.">A.The author begins with calmness and tranquility, but she ultimately shifts the reader to shock and confusion.</li>
             <li><input type="radio" name="questiona4" value=" BIt does not change">B. It does not change</li>
             <li><input type="radio" name="questiona4" value="The author begins with shock and horror, and then she shifts to calmness and peacefulness">C. The author begins with shock and horror, and then she shifts to calmness and peacefulness</li>
             <li><input type="radio" name="questiona4" value="The author begins with mourning and sadness, and then she shifts to happiness and joy.">D.The author begins with mourning and sadness, and then she shifts to happiness and joy.</li>
       </div>
      <div id="class">5.What may be one theme of “The Lottery”??
             <li><input type="radio" name="questiona5" value="Sticks and stones may break my bones, but lotteries will never hurt me.">A.Sticks and stones may break my bones, but lotteries will never hurt me.</li>
             <li><input type="radio" name="questiona5" value="All women must draw first as heads of their households on behalf of their families">B.All women must draw first as heads of their households on behalf of their families </li>
             <li><input type="radio" name="questiona5" value="Lotteries are always in the best interests of everyone involved.">C.Lotteries are always in the best interests of everyone involved.</li>
             <li><input type="radio" name="questiona5" value="Evil can be cloaked in something that seems to be good.">D.Evil can be cloaked in something that seems to be good.</li>
       </div> 
       </ul>
       </br></br>
<button id="ready" onclick="check5()">Done </button> `
}
function check5(){
       var c=0;
       var q1=document.quiz5.questiona1.value;
       var q2=document.quiz5.questiona2.value;
       var q3=document.quiz5.questiona3.value;
       var q4=document.quiz5.questiona4.value;
       var q5=document.quiz5.questiona5.value;
       if (q1=="black spot") {c++}
       if (q2=="He says it will lead to nothing but trouble") {c++}
       if (q3=="Tessie") {c++}
       if (q4=="The author begins with calmness and tranquility, but she ultimately shifts the reader to shock and confusion.") {c++}
       if (q5=="Evil can be cloaked in something that seems to be good.") {c++}
       quiz5.innerHTML = `
       <div class="result">
       <h2>You answered ${c}/5 questions correctly</h2>

       <a href="index.html" class="Home">Done</a> 
       </div>
              `
}