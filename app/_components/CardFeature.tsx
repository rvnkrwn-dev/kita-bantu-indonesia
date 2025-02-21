const CardFeature = ({ children } : {children: any}) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5">
            {children}
        </div>
    );
};

export default CardFeature;