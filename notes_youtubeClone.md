# 1 Introduction

- 

## Demo

------------------------------------------------------------------------------
# 2 Setup


## Project

- In an overview we will, 
    - Configure environment
        - Runtime (NodeJS, BunJS)
        - Package manager (npm, pnpm, yarn, bun)
    - Why Bun?
        - You will get the same environment everywhere
        - Easily run TS scripts with ES6 imports
        - Less issues with dependency issues regarding React19
            - Bcoz npm throws an error, yarn throws a warning, bun simply works
        - Establish basic bun commnads
            - bun add === npm install
            - bunx === npx
    - Create NextJS project
        - use exact version
        - add shadcn/ui
        - get familiar with the structure
    - And add usefull VS Code extensions

- Working with `bunJS`
    - Install bun through `curl` using the documentation 
    - Check for bun via `bun --version` command
    - As `npx` is replaced with `bunx` in bun, we will run `bun create-next-app@latest --version` command to get the latest version number
    - And use the `bunx create-next-app@15.1.6 new-tube` command to create a NextJS project using bun instead of Nodejs
    - After you gave permissions, when folder is created, open it in VS code
    - After checking for `/app/page.tsx & /app/layout.tsx` files and folders are there, run `bun run dev` command in order to start the server

- Adding ShadCN/UI
    - Head over to shadCN/UI page, then
    - Check for latest version with `bunx shadcn@latest --version` and install it with `bunx --bun shadcn@2.1.8 init` command
    - After this there will be around 6 modified files
    - In order to install all of the components run `bunx --bun shadcn@2.1.8 add --all` command to install the shadcn/ui components 

- Now you can repeat the basic rendering done in order to check if project is runnning or not


## Basic layout

- Add logo asset
- Learn basic app router folder
- SideBar component
    - Sidebar section
    - Sidebar items

- Navbar
    - Search inputs
    - Signin component

- Before we start, download the image from the link given in the videos description. Make sure to save that file in the `public` folder as `logo.svg`
    - Now we will add it in the home page
```jsx
// app/page.tsx
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Image src="logo.svg" height={50} width={50} alt="logo" />
            <p className="text-xl font-semibold tracking-tight">New Tube<p>
        </div>
    )
}

```
- Some changes are made in `src/app/layout.tsx` file, make sure to do those changes in your own code too 


- Now let's learn the basic app router folders




## Database


------------------------------------------------------------------------------
# 3 Authentication


------------------------------------------------------------------------------
# 4 Webhook sync


------------------------------------------------------------------------------
# 5 tRPC


## setup


## configuration


------------------------------------------------------------------------------
# 6 Video categories



------------------------------------------------------------------------------
# 7 Studio


## Layout



## Videos


## Infinite Loading

------------------------------------------------------------------------------
# 8 MUX


## Integration


## WebHooks


------------------------------------------------------------------------------
# 9 Video


## Form


## Thumbnails


------------------------------------------------------------------------------
# 10 AI


## Background jobs


## Thumbnails


------------------------------------------------------------------------------
# 11 Shift to part 2


## Additional information

------------------------------------------------------------------------------
# 12 Video Page


## Page


## Views 


## Reactions


## Subscriptions


------------------------------------------------------------------------------
# 13 Comments


## Comments infinite loading


## Comments reaction


## Comments replies



------------------------------------------------------------------------------
# 14 Suggestions



------------------------------------------------------------------------------
# 15 Search page


------------------------------------------------------------------------------
# 16 Improvements


------------------------------------------------------------------------------
# 17 Home feed


------------------------------------------------------------------------------
# 18 Playlists



## Custom playlists


## Populating playlists


## Individual playlists


------------------------------------------------------------------------------
# 19 User page



------------------------------------------------------------------------------
# 20 Banner upload


------------------------------------------------------------------------------
# 21 Subscription list



------------------------------------------------------------------------------
# 22 Final improvement


------------------------------------------------------------------------------
# 23 Deployment



