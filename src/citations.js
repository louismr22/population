/*jslint esnext:true */
/*Les citations proviennent du site https://www.intoxitation.com/ */
var citations = [
	"Compter constamment sur les autres quand on est dans la merde, c’est un peu les prendre pour du PQ.",
	"On reconnaît l'âne à ses oreilles, l'ours à ses griffes l'imbécile à ses discours.",
	"Je vous raconterais bien une connerie mais vraiment il y en a plein les journaux.",
	"Il paraît que les efforts sont payants ! J'avais déjà du mal à en faire !",
	"Si j'étais né avant mon père, j'aurais pu être le sien.",
	"L'an dernier j’étais au bord du gouffre, cette année j'ai fait un grand pas en avant.",
	"Si tu mets ceux qui brassent de l'air d'un coté et ceux qui te le pompent de l'autre... Tu as la climatisation gratuite !",
	"Comme le dit souvent ma copine cocaïnomane : tire un trait, tu y verras plus clair.",
	"Qui a une tête de beurre ne doit pas s'approcher du four.",
	"Le premier gouvernement que j'ai protesté ? ma mère !",
	"Les profs c'est comme l'alcool, sa saoul.",
	"Pas étonnant lorsqu'on indique la direction de la lumière et de la connaissance à une dinde, qu'elle prenne la direction opposée.",
	"Une personne ayant un père casse-pied n’a pas forcément une mère Caspienne.",
	"Fondue enchaînée  : Soirée sado-maso savoyarde.",
	"Progrès : Phénomène qui permet d’acheter un VTT en PVC auprès d’une société de VPC, en appelant les PTT en PCV.",
	"Drame en Sologne : un chasseur confond son fils avec un sanglier... et donne une gifle au sanglier!",
	"On vient enfin de décrypter la pierre de Rosette : le texte est en fait la recette du couscous",
	"L'an dernier j'étais encore un peu prétentieux, cette année je suis parfait.",
	"Si tu dors et que tu rêves que tu dors, il faut que tu te réveilles deux fois pour te lever.",
	"Les avis c'est comme les trou du cul......tout le monde en a un !!!",
	"On a tous besoin de croire en quelque chose, moi je crois que je vais me servir un autre ricard !",
	"Comment vérifier que la petite lumière dans le frigo est vraiment éteinte quand on ferme la porte ?",
	"Tout le monde pense que je suis hypocondriaque. Ça me rend malade.",
	"Une journée sans humour ou sans rire ressemble à un bol de soupe sans jus.",
	"Ne rien faire, mais le faire bien.",
	"Certains ont peur du vide, moi vu le prix de l'essence j'ai plutôt peur du plein !",
	"Si j'avais mis de côté tout l'argent que j'ai dépensé à boire, qu'est-ce que je pourrais m'offrir comme apéritifs !",
	"Tarzan a mal tourné car il a été élevé avec des singes qui n'étaient pas de son âge.",
	"Steak dare-dare : Steak servi dans les fast-foods.",
	"Récalcitron : Citron qui refuse de se laisser cueillir.",
	"Personne dans ce monde devrait se considérer comme un gros nul, car nous sommes tous arrivés les premiers de la course à l’ovule.",
	"Il n'est pas nécéssaire, d'être forcément né à La Havane, pour être un concubin....",
	"Les faux-culs, c'est comme les répondeurs : ça parle toujours quand tu es pas là !",
	"J'aimerais être un pc, pour pouvoir redémarrer ma vie en mode sans échec.",
	"L'amour rend fou. Il n'y a que la guerre qui Rambo.",
	"Eh mec ! Dis ça a un unijambiste ! Comme ça, ça lui fera une belle jambe pour courir !",
	"Qui fait l'âne ne doit pas s'étonner si les autres lui montent dessus.",
	"Ne croyez pas qu'en laissant vos cheveux chez le coiffeur, vous l'avez payé.",
	"Moi j'ai dit bizarre, bizarre, comme c'est étrange ! Pourquoi aurais-je dit bizarre, bizarre ?",
	"Trop bon, trop con.......NON........trop con, TROP con !",
	"Je sens que ma dernière heure est arrivée, je voudrais la passer avec vous.",
	"Il faut manger comme un homme en bonne santé et boire comme un malade.",
	"Secret : Information que l’on ne communique qu’à une seule personne à la fois.",
	"Si vous avez compris tout ce que je viens de vous dire, c'est que j'ai dû faire une erreur quelque part.",
	"Quand on ne sait pas où l'on va, tous les chemins mènent nulle part.",
	"Si vous ne savez pas ou vous allez, vous vous retrouverez sûrement ailleurs.",
	"Les hémorroïdes gagnent du terrain, les chercheurs se grattent la tête.",
	"Les lapsus c'est comme les cunnilingus, un écart de langue et tu te retrouves dans la merde.",
	"A la naissance le nain est normal c'est en grandissant qu'il rapetisse.",
	"Ce n'est pas parce que l'homme a soif d'amour qu'il doit se jeter sur la première gourde.",
	"C'est quand on est dans la merde jusqu'au cou qu'il faut marcher la tête haute.",
	"Au cours d'un repas : Tu vois chérie, j'avais déjà marché dedans, mais j'en avais jamais mangé.",
	"Je ne connais absolument rien à la musique, mais dans mon domaine ce n'est pas nécessaire.",
	"Elle chante tellement faux que même les sourds refusent de regarder ses lèvres bouger.",
	"J'ai vu un film tellement mauvais que les gens faisaient la queue pour sortir de la salle.",
	"Si vous voulez maigrir, suivez mon conseil : mangez autant que vous voulez, mais recrachez tout.",
	"Si on ne peut pas fumer au paradis, je ne suis pas intéressé.",
	"Le labour est au boeur ce que l'amour est aux meufs",
	"Les conneries c'est comme les impôts , tu finis toujours par les payer",
	"J'connaîtrai jamais le bonheur sur terre. Je suis bien trop con.",
	"Tu as à peu près autant de charme qu’une limace crevée !",
	"Si voter changeait quelque chose, il y a longtemps que ça serait interdit.",
	"Le spermatozoïde est un bandit à l'état pur.",
	"L'erreur est humaine mais pour un vrai désastre ça vous prend un ordinateur.",
	"Ne t'inquiète pas si tu as des difficultés en maths ,je peux t'assurer que les miennes sont bien plus importantes.",
	"Le pire ennemi, c'est soi-même, Mais je ne le tue, car je l'aime.",
	"Goéland qui s'gratte le gland Signe de mauvais temps Goéland qui s'gratte le cul F'ra pas beau non plus",
	"C'est en sciant que Léonard devint scie.",
	"On reconnaît le rouquin aux cheveux du père et le requin aux dents de la mère...",
	"Les amis c'est comme les seins; il y en a des petits, des grands... des vrais et des faux...",
	"Mieux vaut être un clown q'un clone.",
	"Ce sont souvent les habitants des pays les plus reculés qui vivent jusqu’à l’âge le plus avancé",
	"Dans le Sentier, les tailleurs sont souvent de confection juive",
	"Avant je me souviens à la plage, il fallait écarter le maillot pour voir les fesses, aujourd'hui il faut écarter les fesses pour voir le maillot !",
	"Ceux qui disent: il ne faut jamais dire jamais ne savent pas qu'il y a jamais dans leur phrase.",
	"Les hommes sont comme les pigeons, tu les aides à prendre de la hauteur et ils te chient dessus.",
	"Pour manger à la table des girafes, il faut avoir un long cou.",
	"Quand il y a une catastrophe, si on évacue les femmes et les enfants d'abord, c'est juste pour pouvoir réfléchir à une solution en silence.",
	"Certaines femmes devraient manger du maquillage, pour être belle à l'intérieur.",
	"Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche !",
	"Pisse heureux, pisse content, mais pisse dedans.",
	"On m'a toujours dit qu'il faut cueillir une cerise avec la queue. Déjà que j'ai du mal avec la main.",
	"Le mot &quot;long&quot; est plus court que le mot &quot;court&quot;, c'est dingue non ?",
	"String : éclipse partiellement la lune.",
	"La mort, c'est un peu comme la connerie. Le mort, lui, il ne sait pas qu'il est mort, ce sont les autres qui sont tristes. Le con c'est pareil.",
	"Tous les cosmonautes sont formels : les couilles ne pendent pas en apesanteur. Elles flottent.",
	"Il a bu trop d'eau-de-vie... Il en est mort.",
	"La société est bien foutue. Ils mettent des uniformes aux cons pour qu'on puisse les reconnaître.",
	"Je voulais faire une bonne action, alors j'ai acheté une chaise à ma belle-mère, mais ils ne veulent pas que je branche la prise.",
	"J'ai dit à ma belle-mère : &quot;Faites comme chez vous !&quot; Elle m'a répondu : &quot;Dans ce cas, sortez de chez moi !&quot;",
	"Si un âne te donne un coup de pied, ne lui rends pas.",
	"J'ai compris que je devenais chauve quand ça me prenait de plus en plus de temps pour me laver le visage.",
	"La modestie, c'est espérer que les autres découvrent enfin à quel point vous êtes formidable.",
	"S'il ne vous reste qu'un jour à vivre, allez faire un tour au bureau de poste le plus proche, ça passera moins vite.",
	"Ma boisson favorite est un cocktail à base de whisky et de carottes. Je suis toujours saoul mais je vois très bien.",
	"C'est drôle comme les gens qui se croient instruits éprouvent le besoin de faire chier le monde.",
	"Je fais deux régimes en même temps, parce qu'avec un seul, j'avais pas assez à manger.",
	"PEUT-êTRE est le moyen le plus simple de ne pas être lié à son propre mensonge",
	"Il était si laid que, lorsqu'il faisait des grimaces, il l'était moins.",
	"Je rappelle qu'aux échecs, si la victoire est brillante, l'échec est mat.",
	"Elle était belle comme la femme d'un autre.",
	"Quand son troisième mari est mort, elle est devenue blonde de chagrin.",
	"Un mariage n'est rien d'autre qu'un enterrement où on peut sentir ses propres fleurs.",
	"Tout le monde fait des erreurs, mais les hommes mariés s'en aperçoivent plus vite.",
	"Le pire, c'est de se marier par amour et de découvrir que son mari n'as pas d'argent.",
	"Ceux qui boivent pour oublier sont priés de payer d'avance, merci",
	"Il vaut mieux être saoul que con, ca dure moins longtemps.",
	"Qui pisse loin ménage ses pompes.",
	"Entre l'enfer et le paradis ce que je préfère c'est respirer!",
	"Les gens les plus constipés sont souvent les plus chiants.",
	"C'est parce que la vitesse de la lumière est supérieure à celle du son que tant de gens paraissent brillants avant d'avoir l'air con.",
	"Le champignon le plus vénéneux, c'est celui qu'on trouve dans les voitures.",
	"C'est curieux, se faire refaire les seins, ça coûte la peau des fesses.",
	"Le pastis c'est comme les seins, un c'est pas assez et trois c'est trop.",
	"La merde a de l'avenir. Vous verrez qu'un jour on en fera des discours.",
	"Il faut se méfier des comiques, parce que quelquefois ils disent des choses pour plaisanter.",
	"On ne peut pas dire la vérité à la télé : il y a trop de monde qui regarde.",
	"Attention au surmenage. Et surtout quand vous ne regardez rien, pensez à retirer vos lunettes.",
	"Si tu téléphones à une voyante et qu'elle ne décroche pas avant que ça sonne, raccroche !",
	"Quand j'etais jeune j'etais très con. Je suis resté très jeune.",
	"Laissez tomber votre tartine avant de la beurrer.",
	"Est-ce un progrès si un cannibale se sert d'une fourchette ?",
	"Les flatulences sont l'expression de l'esprit.",
	"Le plus dur c'est la diarrhée.",
	"Si un jour tu pètes plus haut que ton cul, c'est que ton cul ne se situe pas là où tu penses.",
	"Pas de couilles pas d'embrouilles.",
	"La dinde de Noël n'était pas assez cuite, elle s'envola par la fenêtre...",
	"Si la connerie était un film, il y aurait plus d'acteurs que de spectateurs...",
	"L'échec, c'est la réussite du con.",
	"Elle avait un nez si grand que lorsqu'on l'embrassait sur les deux joues, on avait plus vite fait de passer par derrière.",
	"La preuve que la Terre est ronde, c'est que les gens qui ont les pieds plats ont du mal à marcher.",
	"Un ordinateur c'est bête, ça fait ce qu'on lui dit !",
	"Les filles ! Les princes existent !!! ......Au rayon Biscuit",
	"La seule chose absolue dans un monde comme le nôtre, c'est l'humour.",
	"Le chauffeur est, de loin, la partie la plus dangereuse de l'automobile.",
	"Il vaut mieux être cocu que ministre. Ca dure plus longtemps et l'on n'est pas obligé d'assister aux séances.",
	"La grosse truie ne sait pas pourquoi, en la regardant, la maigre rigole.",
	"Sardine : petit poisson sans tête qui vit dans l'huile.",
	"Enfant : fruit qu'on fit.",
	"Ne pas avoir d'idées et savoir les exprimer : c'est ce qui fait le journaliste.",
	"L'humour est une façon de se tirer d'embarras sans se tirer d'affaire.",
	"Les humains c'est comme un cancer c'est néfaste pour la planète",
	"Petit j'avais un piranha, mais mon chat la manger.",
	"Je n'ai jamais assisté à des courses de spermatozoïdes mais j'ai donné beaucoup de départs !",
	"Un a posteriori est un a priori favorable d’un homme envers une femme qui a un beau postérieur",
	"Si vous avez besoin de consulter un ORL, essayez d’en trouver un qui réponde à vos souhaits.",
	"Pourquoi dit-on que la boxe est le plus dur de tous les sports, alors qu’en fait c'est juste un coup à prendre ?",
	"Il ne faut pas chercher à avoir le beurre et l'argent du beurre, avec le cul de la crèmière.",
	"Les imbéciles grandissent sans qu'on les arrose.",
	"La foule a beaucoup de têtes et pas de cervelle.",
	"La poule qui chante le plus haut n'est pas celle qui pond le mieux.",
	"Seules les plaisanteries doivent Se faire dans le plus grand sérieux.",
	"Qui se branle face au vent, a le nombril tout gluant !",
	"Est-ce l'oeuf le père de la poule ou la poule la mère de l'oeuf ?",
	"Si je lui donnais du miel à lécher, il me mordrait le doigt.",
	"L’humour n’est jamais mal placé. Où qu’il se place, ça reste de l’humour.",
	"Rire sa fait parti de la santé",
	"Si tu n'as rien à faire de tes doigts coupes les toi.",
	"Le paradis des hommes ? Trois télécommandes et un siège de toilettes toujours relevé.",
	"Le ping-pong, c'est comme le tennis sauf qu'au tennis , les mecs ils sont debout sur la table.",
	"Pour que l'alcool fasse du bien aux femmes il faut que ce soient les hommes qui le boivent",
	"Le monde fut créé le 27 Mai 3257 avant Jésus-Christ, à 17 heures 49 de l'après-midi, je sais! j'y étais!",
	"Y a-t-il une vie après la mort ? Seulement Jésus pourrait répondre à cette question. Malheureusement il est mort.",
	"Commencez la révolution sans nous. On préfère être cons et vivants que morts et pleins d'idées.",
	"Si tu t'endors avec le cul qui gratte, tu te réveilles avec le doigt qui pue",
	"Un égoïste c'est quelqu'un qui ne pense pas à moi.",
	"Il existe deux sortes de justice : vous avez l'avocat qui connaît bien la loi et vous avez l'avocat qui connaît bien le juge",
	"De tous ceux qui n’ont rien à dire, les plus agréables sont ceux qui se taisent.",
	"La politique c'est cinq ans de droit, tout le reste de travers!",
	"Si froid tu n'as pas, habillé tu es. Si froid tu as, petit il sera.",
	"Le comble de l'optimisme, c'est de rentrer dans un grand restaurant et compter sur la perle qu'on trouvera dans une huître pour payer la note.",
	"Quatre-vingt ans, c'est l'âge de la puberté académique.",
	"C'est très curieux : ce sont toujours les célibataires qui vous donnent des conseils pour élever des enfants.",
	"Quand vous êtes embêtés, embrouillez tout.",
	"La culture c'est comme la confiture : moins on en a, plus on l'étale.",
	"La mode des cocktails avant les repas a été lancée par un cuisinier qui avait brûlé le rôti.",
	"Couper le téléphone chez soi, de temps en temps, est une jouissance comparable à celle de la ballerine qui enlève ses chaussons et son tutu.",
	"Les ennuis, c'est comme le papier hygiénique, on en tire un, il en vient dix.",
	"L'alcool tue lentement. On s'en fout. On n'est pas pressés.",
	"Si l'amour te tourne le dos, touche lui le cul.",
	"Les fonctionnaires c'est comme le jeu des mikados; le premier qui bouge à perdu.",
	"J'ai fini par fumer ma carte d'identité...",
	"La meilleure manière de prendre les choses du bon côté, c'est d'attendre qu'elles se retournent.",
	"Qu'un potage soit immangeable, cela ne tient parfois qu'à un cheveu.",
	"Maintenant que je suis vieux, lorsque je parcours un cimetière, j'ai l'impression de visiter des appartements.",
	"Donnez-moi un bain sans eau, je n'ai pas le temps de me sécher.",
	"Celui qui parle de moi par-derrière fait honneur à mon derrière !",
	"Quand le réveil sonna, je su qu'il était cette heure ennemie.",
	"Les hommes c'est comme la neige, on ne sait jamais combien de centimètre on aura ni combien de temps ca tiendra.",
];
export default citations;