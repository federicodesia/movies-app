const clamp = (num: number, min?: number, max?: number) => {
    if(min != null && max != null){
        return num <= min
            ? min
            : num >= max
                ? max
                : num;
    }

    if(min != null) return num <= min ? min : num;
    if(max != null) return num >= max ? max : num;
    return num;
};

export default clamp