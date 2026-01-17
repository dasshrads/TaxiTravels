import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [gender, setGender] = useState<"male" | "female">("female");
  const [status, setStatus] = useState("No ride booked");

  const bookTaxi = async () => {
    if (!pickup || !drop) {
      Alert.alert("Error", "Enter pickup & drop location");
      return;
    }

    try {
      setStatus("🚕 Searching for driver...");

      await axios.post("http://192.168.0.106:5000/book", {
        pickup,
        drop,
        gender
      });

      setTimeout(() => {
        setStatus("✅ Driver Assigned. On the way!");
      }, 2000);
    } catch (error) {
      Alert.alert("Error", "Booking failed");
    }
  };

  const sendSOS = async () => {
    try {
      await axios.post("http://192.168.0.106:5000/sos", {
        userType: gender,
        location: "Live GPS Enabled"
      });
      Alert.alert("SOS Sent", "Emergency help notified!");
    } catch (error) {
      Alert.alert("Error", "Failed to send SOS");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚕 TaxiTravels</Text>

      {/* Gender Selection */}
      <View style={styles.genderBox}>
        <TouchableOpacity
          style={[
            styles.genderBtn,
            gender === "female" && styles.genderActive
          ]}
          onPress={() => setGender("female")}
        >
          <Text>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderBtn,
            gender === "male" && styles.genderActive
          ]}
          onPress={() => setGender("male")}
        >
          <Text>Male</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
      />

      <TextInput
        style={styles.input}
        placeholder="Drop Location"
        value={drop}
        onChangeText={setDrop}
      />

      <TouchableOpacity style={styles.btn} onPress={bookTaxi}>
        <Text style={styles.btnText}>Book Taxi</Text>
      </TouchableOpacity>

      <Text style={styles.status}>{status}</Text>

      {/* Women Safety */}
      <View style={styles.safetyBox}>
        <Text style={styles.safetyTitle}>Safety</Text>
        <TouchableOpacity style={styles.sosBtn} onPress={sendSOS}>
          <Text style={styles.sosText}>🚨 SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    color: "#ffcc00",
    textAlign: "center",
    marginBottom: 20
  },
  genderBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  genderBtn: {
    backgroundColor: "#ddd",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8
  },
  genderActive: {
    backgroundColor: "#ffcc00"
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  btn: {
    backgroundColor: "#ffcc00",
    padding: 15,
    borderRadius: 10
  },
  btnText: {
    fontWeight: "bold",
    textAlign: "center"
  },
  status: {
    color: "#fff",
    marginTop: 15,
    textAlign: "center"
  },
  safetyBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10
  },
  safetyTitle: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10
  },
  sosBtn: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10
  },
  sosText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});
