/*------------------------------------------------------------------------
                    SETTING UP SIGN-IN-OR-UP PAGE

- Inside of /(auth) we can create layout.tsx which will serve as centering layout
------------------------------------------------------------------------*/

import { SignUp } from "@clerk/nextjs"

export default function Page() {
    return (
        <SignUp/>
    )
}