import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollGrow}
          showsVerticalScrollIndicator={false}
        >
          {/* 1. App Logo Section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoGrid}>
              <View style={[styles.logoDot, styles.logoDotTopBottom]} />
              <View style={styles.logoMiddleRow}>
                <View style={[styles.logoDot, styles.logoDotLeftRight]} />
                <View style={[styles.logoDot, styles.logoDotLeftRight]} />
              </View>
              <View style={[styles.logoDot, styles.logoDotTopBottom]} />
            </View>
          </View>

          {/* 2. Heading and Subheading */}
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.subheading}>Let's experience the joy of telecare AI.</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* 3. Email Input Field */}
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={[styles.inputWrapper, styles.inputActiveWrapper]}>
              <Ionicons
                name="mail"
                size={20}
                color="#9ca3af"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your email..."
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* 4. Password Input Field */}
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed"
                size={20}
                color="#9ca3af"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password..."
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="#9ca3af"
                />
              </TouchableOpacity>
            </View>

            {/* 5. Sign In Button */}
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
              <Text style={styles.signInButtonText}>Sign In  →</Text>
            </TouchableOpacity>
          </View>

          {/* 6. Social Login Buttons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={20} color="#EA4335" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-instagram" size={20} color="#1a202c" />
            </TouchableOpacity>
          </View>

          {/* 7. Footer Text Actions */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text style={styles.greenLink} onPress={() => { }}>Sign Up.</Text>
            </Text>
            <TouchableOpacity onPress={() => { }} style={styles.forgotPasswordClick}>
              <Text style={styles.greenLink}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  scrollGrow: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
  /* Logo UI styling */
  logoContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  logoGrid: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  logoDot: {
    backgroundColor: "#84cc16",
    borderRadius: 6,
  },
  logoDotTopBottom: {
    width: 12,
    height: 18,
  },
  logoMiddleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 48,
    marginVertical: 2,
  },
  logoDotLeftRight: {
    width: 18,
    height: 12,
  },
  /* Typography styling */
  headerContainer: {
    alignItems: "center",
    marginBottom: 36,
  },
  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2d3748",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: "#718096",
    textAlign: "center",
  },
  /* Form components styling */
  formContainer: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4a5568",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7fafc",
    borderWidth: 1.5,
    borderColor: "#edf2f7",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 20,
  },
  inputActiveWrapper: {
    borderColor: "#a3e635", // Highlight green border matching active input
    backgroundColor: "#ffffff",
    shadowColor: "#84cc16",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#1a202c",
    fontSize: 15,
  },
  eyeIcon: {
    fontSize: 18,
    opacity: 0.4,
  },
  signInButton: {
    backgroundColor: "#84cc16",
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#84cc16",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  /* Social login styling */
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    gap: 16,
  },
  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  socialIconText: {
    fontSize: 18,
    color: "#1a202c",
  },
  /* Bottom Text links */
  footerContainer: {
    marginTop: 40,
    alignItems: "center",
    width: "100%",
  },
  footerText: {
    fontSize: 14,
    color: "#4a5568",
    marginBottom: 12,
  },
  forgotPasswordClick: {
    paddingVertical: 4,
  },
  greenLink: {
    color: "#84cc16",
    fontWeight: "600",
  },
});