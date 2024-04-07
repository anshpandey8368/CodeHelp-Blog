import {  createContext, useState } from "react";



export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);

    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

    async function fetchBlogPosts (page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch{
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}