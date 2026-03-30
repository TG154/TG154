import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'Tg___154') {
    return `                                                  

@@@@@$@@@$$$$$$$$$$@█$█$%$$$$$$$$$$$$$$$$$@@@@@@@@
@@@@@@@$$$$$$$$$>,::,,,,:,,,:M$$$$$$$$$$$$$$$$@@@@  Tg___154
%@@@$$$@$$@;:::,,,t=!,,;1:,:,::$$██$$$$$$$$$█$$$$$ -----------
%%@@@@$$$$>:=,,IW@&>#::,&*%+:,;1,@$█$$$$$$$$$$$@@@  ABOUT
%%%@@@$@$%lM,t,::M*;,::::,>:=,,::#█$@$@$$$$@$$$@@@
%%%%@$:i;;::::,1░▒▒;$::$!::,,i;,,<$$@@$$$$$$$@@@$@  ${config.name}
%%@%@@$;☻☻,:,♠█▓░░▒▒███$▒#.&i:::I;l$$$$$$$$$$$$@@@  <u><a href="${config.resume_url}" target="_blank">resume</a></u>
%@@@$@%☺::,,,+•▓▓▒▒░░▓=█MI▒▓&:::<%$$$$$$$@$$$@@@@@ 爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
%@@%@@;::;,::+♣•$,,::=███*i*>W:,l$$$$$$$$@$$$$@@@@ -----------
@%@@@@::,,:,;t•l█|:1:#██▓██$▒▒|,:l$$$$$$$$$@@$@@@%  CONTACT 
%@%@@@$;l@░&+☻•██☺i:$>█$@▓██▒░▓:$$$$$$$$$$$@@@@%%%  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
@@@@@$$@$$:+<1•♠♠█░▒▒█░▓█!█&▒▒▓,$$$$$$$$$@@@%%%%&&  <u><a href="mailto:${config.email_2}" target="_blank">${config.email_2}</a></u>
%@@@@$@$$ii1M▓$♣•♣▓░░░▒░▓█▓>█▒▓;$$$$$$$@@@%&%&W&WM  <u><a href="mailto:${config.email_3}" target="_blank">${config.email_3}</a></u>
%%%%@@%%@M•▓;!▓•••♠█▓▒░░▒▓█▒▓▓▓:@$$$$$@@@%&&W&&WMM  <u><a href="${config.social.github}" target="_blank">GitHub</a></u>
%%&&&%%&&%>M░&I☺•••◘░█▒░▓▓░█▒▒▓ti@@$&&l1I|1&WW&WMM -----------
&&&WWW&WW&&&%M,;▓••••▒██▓░☺▒▒▒&i!=>&&*=I=!t&&WWWMM Intro:
&%&%&W|::::,,::♦•█♦♠♠♠♦=*██%M@1,:::~!i:<<::|&WW&WW + passionate high schooler who “does basically everything” (still figuring out if that’s a skill or a problem
&&%&&|II::,,;,,:▒░W$█▓>i::,,::=,,,:,::+<:,,i&&&W&W + I like breaking stuff to understand how it works, then fixing it like I meant to do that all along
%%%@%%%&;░,,,,+,:t$MW█▓▒░▒▓W;:<=1t,,::=::::::1>&&& + learn random skills pretty fast, then forget why I started learning them in the first place
%%%%@iI1%,;M+,,;|,,I:,,:@,,:<::M~<:;,=:,:,,,,:,W&W + learn random skills pretty fast, then forget why I started learning them in the first place
&%%%@@&::,,::|☺!,l;:::,:;t,:&:::###:lt:|###;:!,,&W + big on creativity, discipline shows up sometimes but not consistently
@;>i+;i=,,,,,:;|<|I=:,,,,::,tt::;#=;+::#M~&:,1:::W + always switching between focusing on what I should do and starting something completely differen
@@I;i&,,,t:%▒M~l~;1:;~,:,::,,,::::W:,,t:t1+|,t::=l + tend to overcomplicate simple things for no reason other than curiosity
@W:I:,,,l,:,:☻<!,:;,,::i::,,;lW%M<l&,:*,:=:::11:t: + somehow things still work out, so I’m just going with it
M:M1|#tll::,,,:▒&|::,,:,,!WW+;;!>+,M:::,:<::::I:,~

`;
  } else {
    return `

@@@@$@@@$$$$$$$$$$@█$█$%$$$$$$$$$$$$$$$$$@@@@@@@@
@@@@@@@$$$$$$$$$>,::,,,,:,,,:M$$$$$$$$$$$$$$$$@@@@  Tg___154
%@@@$$$@$$@;:::,,,t=!,,;1:,:,::$$██$$$$$$$$$█$$$$$ -----------
%%@@@@$$$$>:=,,IW@&>#::,&*%+:,;1,@$█$$$$$$$$$$$@@@  ABOUT
%%%@@@$@$%lM,t,::M*;,::::,>:=,,::#█$@$@$$$$@$$$@@@
%%%%@$:i;;::::,1░▒▒;$::$!::,,i;,,<$$@@$$$$$$$@@@$@  ${config.name}
%%@%@@$;☻☻,:,♠█▓░░▒▒███$▒#.&i:::I;l$$$$$$$$$$$$@@@  <u><a href="${config.resume_url}" target="_blank">resume</a></u>
%@@@$@%☺::,,,+•▓▓▒▒░░▓=█MI▒▓&:::<%$$$$$$$@$$$@@@@@ 爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
%@@%@@;::;,::+♣•$,,::=███*i*>W:,l$$$$$$$$@$$$$@@@@ -----------
@%@@@@::,,:,;t•l█|:1:#██▓██$▒▒|,:l$$$$$$$$$@@$@@@%  CONTACT 
%@%@@@$;l@░&+☻•██☺i:$>█$@▓██▒░▓:$$$$$$$$$$$@@@@%%%  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
@@@@@$$@$$:+<1•♠♠█░▒▒█░▓█!█&▒▒▓,$$$$$$$$$@@@%%%%&&  <u><a href="mailto:${config.email_2}" target="_blank">${config.email_2}</a></u>
%@@@@$@$$ii1M▓$♣•♣▓░░░▒░▓█▓>█▒▓;$$$$$$$@@@%&%&W&WM  <u><a href="mailto:${config.email_3}" target="_blank">${config.email_3}</a></u>
%%%%@@%%@M•▓;!▓•••♠█▓▒░░▒▓█▒▓▓▓:@$$$$$@@@%&&W&&WMM  <u><a href="${config.social.github}" target="_blank">GitHub</a></u>
%%&&&%%&&%>M░&I☺•••◘░█▒░▓▓░█▒▒▓ti@@$&&l1I|1&WW&WMM -----------
&&&WWW&WW&&&%M,;▓••••▒██▓░☺▒▒▒&i!=>&&*=I=!t&&WWWMM Intro:
&%&%&W|::::,,::♦•█♦♠♠♠♦=*██%M@1,:::~!i:<<::|&WW&WW + passionate high schooler who “does basically everything” (still figuring out if that’s a skill or a problem
&&%&&|II::,,;,,:▒░W$█▓>i::,,::=,,,:,::+<:,,i&&&W&W + I like breaking stuff to understand how it works, then fixing it like I meant to do that all along
%%%@%%%&;░,,,,+,:t$MW█▓▒░▒▓W;:<=1t,,::=::::::1>&&& + learn random skills pretty fast, then forget why I started learning them in the first place
%%%%@iI1%,;M+,,;|,,I:,,:@,,:<::M~<:;,=:,:,,,,:,W&W + learn random skills pretty fast, then forget why I started learning them in the first place
&%%%@@&::,,::|☺!,l;:::,:;t,:&:::###:lt:|###;:!,,&W + big on creativity, discipline shows up sometimes but not consistently
@;>i+;i=,,,,,:;|<|I=:,,,,::,tt::;#=;+::#M~&:,1:::W + always switching between focusing on what I should do and starting something completely differen
@@I;i&,,,t:%▒M~l~;1:;~,:,::,,,::::W:,,t:t1+|,t::=l + tend to overcomplicate simple things for no reason other than curiosity
@W:I:,,,l,:,:☻<!,:;,,::i::,,;lW%M<l&,:*,:=:::11:t: + somehow things still work out, so I’m just going with it
M:M1|#tll::,,,:▒&|::,,:,,!WW+;;!>+,M:::,:<::::I:,~

`;
  }
};

export default sumfetch;
