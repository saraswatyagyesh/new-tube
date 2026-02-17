/*-------------------------------------------------------------------------------------------------
                                            ADDING CLERRK MIDDLEWARE

- After seting up the clerk account,
- Copy the middlware code from clerk documentation or AuthApp dashboard into this file

- After that, in the /src/app/layout.tsx file 
    import { ClerkProvider } from "@clerk/nextjs";

    return(
        <ClerkProvider>
            Wrap the whole application inside that
        </ClerkProvider>
    )

- Now you can do `bun run dev`
- Head to notes.md to create yr own sign-in-or-up page

--------------------------------------------------------------------------------------------------*/