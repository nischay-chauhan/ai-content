import React from 'react'

function Loading() {
    return (
        <div className="p-10">
            <div className="w-full h-32 bg-slate-200 rounded-lg animate-pulse mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="h-40 bg-slate-200 rounded-lg animate-pulse"></div>
                ))}
            </div>
        </div>
    )
}

export default Loading
