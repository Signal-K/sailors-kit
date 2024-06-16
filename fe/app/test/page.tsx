"use client"

import Layout from "@/components/Layout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function () {
    // const { activePlanet, activeSector } = useActivePlanet();
    const supabase = useSupabaseClient();

    async function signoutUser() {
        const { error } = await supabase.auth.signOut()
    };

    return (
        <Layout bg={false}>
            <div className="p-5">
                This is a test page :)
            </div>
        </Layout>
    );
};