import paula from "./paula";
import rosario from "./rosario";

const data = new Map();

data.set("paula-en", paula.data);
data.set("paula-es", paula.dataEsp);
data.set("rosario-en", rosario.data);
data.set("rosario-es", rosario.dataEsp);

export default data;
