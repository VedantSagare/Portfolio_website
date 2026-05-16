package com.vedant.portfolio.model;

import java.util.List;
import java.util.Map;

public class PortfolioData {

    private About about;
    private List<SkillCategory> skills;
    private List<Experience> experiences;
    private List<Project> projects;
    private List<Achievement> achievements;
    private Education education;
    private List<SocialLink> socialLinks;

    // --- Inner Classes ---

    public static class About {
        private String name;
        private String title;
        private String summary;
        private String email;
        private String phone;
        private String location;
        private List<Stat> stats;

        public About() {}
        public About(String name, String title, String summary, String email, String phone, String location, List<Stat> stats) {
            this.name = name; this.title = title; this.summary = summary;
            this.email = email; this.phone = phone; this.location = location; this.stats = stats;
        }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getSummary() { return summary; }
        public void setSummary(String summary) { this.summary = summary; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
        public List<Stat> getStats() { return stats; }
        public void setStats(List<Stat> stats) { this.stats = stats; }
    }

    public static class Stat {
        private String label;
        private String value;

        public Stat() {}
        public Stat(String label, String value) { this.label = label; this.value = value; }

        public String getLabel() { return label; }
        public void setLabel(String label) { this.label = label; }
        public String getValue() { return value; }
        public void setValue(String value) { this.value = value; }
    }

    public static class SkillCategory {
        private String category;
        private String icon;
        private List<String> items;

        public SkillCategory() {}
        public SkillCategory(String category, String icon, List<String> items) {
            this.category = category; this.icon = icon; this.items = items;
        }

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public String getIcon() { return icon; }
        public void setIcon(String icon) { this.icon = icon; }
        public List<String> getItems() { return items; }
        public void setItems(List<String> items) { this.items = items; }
    }

    public static class Experience {
        private String company;
        private String role;
        private String duration;
        private String location;
        private String type;
        private List<String> highlights;

        public Experience() {}
        public Experience(String company, String role, String duration, String location, String type, List<String> highlights) {
            this.company = company; this.role = role; this.duration = duration;
            this.location = location; this.type = type; this.highlights = highlights;
        }

        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }
        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }
        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
        public String getType() { return type; }
        public void setType(String type) { this.type = type; }
        public List<String> getHighlights() { return highlights; }
        public void setHighlights(List<String> highlights) { this.highlights = highlights; }
    }

    public static class Project {
        private String title;
        private String description;
        private String duration;
        private List<String> technologies;
        private List<String> highlights;

        public Project() {}
        public Project(String title, String description, String duration, List<String> technologies, List<String> highlights) {
            this.title = title; this.description = description; this.duration = duration;
            this.technologies = technologies; this.highlights = highlights;
        }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }
        public List<String> getTechnologies() { return technologies; }
        public void setTechnologies(List<String> technologies) { this.technologies = technologies; }
        public List<String> getHighlights() { return highlights; }
        public void setHighlights(List<String> highlights) { this.highlights = highlights; }
    }

    public static class Achievement {
        private String title;
        private String description;
        private String icon;

        public Achievement() {}
        public Achievement(String title, String description, String icon) {
            this.title = title; this.description = description; this.icon = icon;
        }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public String getIcon() { return icon; }
        public void setIcon(String icon) { this.icon = icon; }
    }

    public static class Education {
        private String institution;
        private String degree;
        private String duration;
        private String cpi;

        public Education() {}
        public Education(String institution, String degree, String duration, String cpi) {
            this.institution = institution; this.degree = degree;
            this.duration = duration; this.cpi = cpi;
        }

        public String getInstitution() { return institution; }
        public void setInstitution(String institution) { this.institution = institution; }
        public String getDegree() { return degree; }
        public void setDegree(String degree) { this.degree = degree; }
        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }
        public String getCpi() { return cpi; }
        public void setCpi(String cpi) { this.cpi = cpi; }
    }

    public static class SocialLink {
        private String name;
        private String url;
        private String icon;

        public SocialLink() {}
        public SocialLink(String name, String url, String icon) {
            this.name = name; this.url = url; this.icon = icon;
        }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
        public String getIcon() { return icon; }
        public void setIcon(String icon) { this.icon = icon; }
    }

    // --- Root Getters/Setters ---

    public About getAbout() { return about; }
    public void setAbout(About about) { this.about = about; }
    public List<SkillCategory> getSkills() { return skills; }
    public void setSkills(List<SkillCategory> skills) { this.skills = skills; }
    public List<Experience> getExperiences() { return experiences; }
    public void setExperiences(List<Experience> experiences) { this.experiences = experiences; }
    public List<Project> getProjects() { return projects; }
    public void setProjects(List<Project> projects) { this.projects = projects; }
    public List<Achievement> getAchievements() { return achievements; }
    public void setAchievements(List<Achievement> achievements) { this.achievements = achievements; }
    public Education getEducation() { return education; }
    public void setEducation(Education education) { this.education = education; }
    public List<SocialLink> getSocialLinks() { return socialLinks; }
    public void setSocialLinks(List<SocialLink> socialLinks) { this.socialLinks = socialLinks; }
}
