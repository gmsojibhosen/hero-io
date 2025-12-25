import React from 'react';
import { useNavigation } from "react-router";

const PageLoading = () => {

    const navigation = useNavigation()
    if(navigation.state === "loading")
    return (
        <div>
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
        </div>
    );

    return null;
};

export default PageLoading;