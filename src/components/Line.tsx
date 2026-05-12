const Line = () => {
    return (
        <div className="px-4">
            <div
                className="border-b border-dashed border-transparent w-full"
                style={{
                    borderImage:
                        "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent) 1",
                }}
            />
        </div>
    );
};

export default Line;
