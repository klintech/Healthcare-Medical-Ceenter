document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")
      nav.classList.toggle("show")
      burger.classList.toggle("burger-active")
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
    })
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Testimonial Carousel
    const testimonials = document.querySelectorAll(".testimonial")
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")
    let currentTestimonial = 0
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none"
      })
    }
  
    prevBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
      showTestimonial(currentTestimonial)
    })
  
    nextBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      showTestimonial(currentTestimonial)
    })
  
    showTestimonial(currentTestimonial)
  
    // Animate on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".service-card, .team-member, .testimonial-carousel, #appointmentForm")
  
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate")
        } else {
          element.classList.remove("animate")
        }
      })
    }
  
    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Initial check on page load
  
    // Form Submission
    const appointmentForm = document.getElementById("appointmentForm")
    if (appointmentForm) {
      appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(appointmentForm)
        console.log("Appointment booked:")
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`)
        }
  
        // Clear the form
        appointmentForm.reset()
  
        // Show a success message (you can replace this with a more user-friendly notification)
        alert("Appointment booked successfully!")
      })
    }
  
    // Animate elements on scroll
    const animateOnScroll2 = () => {
      const elements = document.querySelectorAll(".fade-in")
  
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.style.setProperty("--animation-order", index + 1)
          element.classList.add("animate")
        }
      })
    }
  
    window.addEventListener("scroll", animateOnScroll2)
    animateOnScroll2() // Initial check on page load
  
    // Service card hover effect
    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector(".service-details").style.display = "block"
      })
      card.addEventListener("mouseleave", () => {
        card.querySelector(".service-details").style.display = "none"
      })
    })
  })
  
  