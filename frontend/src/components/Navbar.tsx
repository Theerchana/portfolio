import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "rgba(10,10,15,0.6)",
        backdropFilter: "blur(10px)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "15px 0",
      }}
    >
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {["Home", "About", "Skills", "Projects","Education", "Contact"  ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#c77dff",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
