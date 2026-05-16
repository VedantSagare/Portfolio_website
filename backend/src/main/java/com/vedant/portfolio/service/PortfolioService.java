package com.vedant.portfolio.service;

import com.vedant.portfolio.model.PortfolioData;
import com.vedant.portfolio.model.PortfolioData.*;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PortfolioService {

    public PortfolioData getPortfolioData() {
        PortfolioData data = new PortfolioData();

        // About
        data.setAbout(new About(
            "Vedant Sagare",
            "Software Developer",
            "Backend-focused Software Developer with experience in building scalable and high-performance systems using Java and Spring Boot. Proficient in designing RESTful APIs and microservices architectures, with strong expertise in database optimization, caching, and distributed system fundamentals. Passionate about solving complex backend problems and building reliable, production-grade systems in Agile environments.",
            "vedantsagare2002@gmail.com",
            "+91-9356626084",
            "Hyderabad, India",
            Arrays.asList(
                new Stat("Experience", "1+ Years"),
                new Stat("Company", "NPCI"),
                new Stat("Education", "COEP Pune"),
                new Stat("Focus", "Backend Systems")
            )
        ));

        // Skills
        data.setSkills(Arrays.asList(
            new SkillCategory("Languages", "💻", Arrays.asList("Java", "Python", "C++", "JavaScript")),
            new SkillCategory("Frontend", "🎨", Arrays.asList("React", "Tailwind CSS")),
            new SkillCategory("Backend & Frameworks", "⚙️", Arrays.asList("Spring Boot", "RESTful APIs", "Microservices Architecture")),
            new SkillCategory("Databases & Caching", "🗄️", Arrays.asList("PostgreSQL", "MySQL", "Redis", "SQLite")),
            new SkillCategory("Messaging & Streaming", "📡", Arrays.asList("Apache Kafka")),
            new SkillCategory("DevOps & Tools", "🔧", Arrays.asList("Git", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Docker", "Linux"))
        ));

        // Experience
        data.setExperiences(Arrays.asList(
            new Experience(
                "National Payments Corporation of India (NPCI)",
                "Software Developer",
                "Sep 2024 – Present",
                "Hyderabad, Telangana",
                "Full-time",
                Arrays.asList(
                    "Designed and developed scalable RESTful APIs using Spring Boot for onboarding bank members, improving system efficiency and integration.",
                    "Implemented backend services aligned with microservices architecture, handling high-volume financial and transactional data.",
                    "Led 10+ Change Requests (CRs) introducing automated validation logic, reducing manual data entry errors by 30%.",
                    "Optimized PostgreSQL and MariaDB queries and schema design, achieving sub-second response times for large-scale transactional workloads.",
                    "Applied security best practices by resolving Checkmarx and SonarQube vulnerabilities, preventing SQL injection and XSS attacks.",
                    "Achieved 80% unit test coverage using JUnit and Mockito, ensuring reliability across CI/CD pipelines.",
                    "Worked in an Agile/Scrum environment, collaborating with cross-functional teams for iterative delivery and faster releases."
                )
            ),
            new Experience(
                "Samsung SDS",
                "Research Intern",
                "Jan 2023 – Jun 2023",
                "Remote",
                "Internship",
                Arrays.asList(
                    "Developed responsive UI components from Figma designs, optimizing React state management and improving performance.",
                    "Collaborated on building a web portal for Android device mirroring and user interaction workflows."
                )
            )
        ));

        // Projects
        data.setProjects(Arrays.asList(
            new Project(
                "Crowdfunding – Blockchain-Based Fund Raising System",
                "A decentralized fundraising platform using Ethereum blockchain and smart contracts with voting-based fund approval.",
                "May 2023 – Jul 2023",
                Arrays.asList("Ethereum", "Solidity", "Smart Contracts", "React"),
                Arrays.asList(
                    "Built a decentralized fundraising platform using Ethereum blockchain and smart contracts.",
                    "Implemented voting-based fund approval system ensuring transparency and security."
                )
            ),
            new Project(
                "Image Resolution Enhancement – Deep Learning",
                "Enhanced low-resolution images using SRCNN deep learning model with measurable quality improvements.",
                "Dec 2022 – Apr 2023",
                Arrays.asList("Python", "Keras", "Deep Learning", "SRCNN"),
                Arrays.asList(
                    "Implemented SRCNN model to enhance low-resolution images using deep learning techniques.",
                    "Evaluated model using PSNR, MSE, and SSIM metrics to measure image quality improvement."
                )
            )
        ));

        // Achievements
        data.setAchievements(Arrays.asList(
            new Achievement(
                "Ninja Award – NPCI Coding Playground",
                "Won Ninja Award at NPCI Coding Playground Challenge (April 2025).",
                "🏆"
            ),
            new Achievement(
                "Certificate of Merit – IIIT Hyderabad",
                "Received Certificate of Merit from IIIT Hyderabad for Deep Tech Bootcamp (TalentSprint, 2024-25).",
                "📜"
            )
        ));

        // Education
        data.setEducation(new Education(
            "College Of Engineering Pune (COEP)",
            "Bachelor of Technology, Electronics and TeleCommunication Engineering",
            "Nov 2020 – May 2024",
            "7.89/10"
        ));

        // Social Links
        data.setSocialLinks(Arrays.asList(
            new SocialLink("LinkedIn", "https://linkedin.com/in/vedantsagare", "linkedin"),
            new SocialLink("GitHub", "https://github.com/vedantsagare", "github"),
            new SocialLink("LeetCode", "https://leetcode.com/vedantsagare", "leetcode"),
            new SocialLink("GeeksforGeeks", "https://geeksforgeeks.org/user/vedantsagare", "gfg"),
            new SocialLink("Email", "mailto:vedantsagare2002@gmail.com", "email")
        ));

        return data;
    }
}
