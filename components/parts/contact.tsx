const Contact = () =>{
    return (
        <section id="contact" className="py-16 text-center bg-gray-50">
  <h2 className="text-4xl font-bold mb-4 text-[#003366]">Contact Me</h2>
  <p className="text-gray-600 max-w-xl mx-auto mb-8">
    I’m currently open to freelance or full-time opportunities.
    Feel free to reach out if you’d like to work together.
  </p>

  <a
    href="mailto:yourname.dev@gmail.com"
    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
  >
    📩 Send Me an Email
  </a>

  <div className="mt-6 flex justify-center gap-6 text-2xl text-gray-500">
    <a href="https://github.com/trisvo05" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000" alt="" width={50} />
    </a>
    <a href="https://www.linkedin.com/in/minh-tri-b15183284/" target="_blank" >
            <img src="https://img.icons8.com/?size=100&id=118979&format=png&color=000000" alt="" width={50} />
    </a>
  </div>
</section>
    )
}
export default Contact;