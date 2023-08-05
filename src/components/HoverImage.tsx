interface Props {
  src: string;
  className?: string;
  srcOnHover?: string;
  alt?: string;
}

const HoverImage: React.FC<Props> = ({ src, className, srcOnHover, alt }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onMouseOver={(e): void => {
      srcOnHover && (e.currentTarget.src = srcOnHover)
    }}
    onMouseOut={(e): void => {
      srcOnHover && (e.currentTarget.src = src)
    }}
  />
)

export default HoverImage