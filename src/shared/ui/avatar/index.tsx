import  {type DetailedHTMLProps, type ImgHTMLAttributes} from 'react';

type IAvatarProps =  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const Avatar = ({className, ...props}: IAvatarProps) => {
    return (
        <img {...props}/>
    );
};

export default Avatar;