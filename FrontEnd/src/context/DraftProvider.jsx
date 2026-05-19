import { useState } from "react";
import { DraftContext } from "./DraftContext";


export default function DraftProvider({children}) {
    const [draft, setDraft] = useState(null);
    return (
        <DraftContext.Provider value={{draft, setDraft}}>
            {children}
        </DraftContext.Provider>
    )

}
