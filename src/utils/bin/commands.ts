// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  commands.forEach((cmd, i) => {
    c += cmd;
    if ((i + 1) % 7 === 0 && i !== commands.length - 1) {
      c += '\n';
    } else if (i !== commands.length - 1) {
      c += ' ';
    }
  });
  c = c.trimEnd();
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  if (args[0] === "help") {
    return `Available emails:
1 - ${config.email}
2 - ${config.email_2}
3 - ${config.email_3}
Usage: type 'email' or 'email [1|2|3]'`;
  }

  let selected = config.email; // default

  if (args[0] === "2") selected = config.email_2;
  if (args[0] === "3") selected = config.email_3;

  window.open(`mailto:${selected}`);
  return `Opening mailto:${selected}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`${config.social.github}`);
  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'sudo'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ███████████   █████████  ████  ██████████ █████ █████ 
░█░░░███░░░█  ███░░░░░███░░███ ░███░░░░░░█░░███ ░░███  
░   ░███  ░  ███     ░░░  ░███ ░███     ░  ░███  ░███ █
    ░███    ░███          ░███ ░█████████  ░███████████
    ░███    ░███    █████ ░███ ░░░░░░░░███ ░░░░░░░███░█
    ░███    ░░███  ░░███  ░███  ███   ░███       ░███░ 
    █████    ░░█████████  █████░░████████        █████ 
   ░░░░░      ░░░░░░░░░  ░░░░░  ░░░░░░░░        ░░░░░  

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
