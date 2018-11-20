package com.revature.beans;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="room_type")
public class RoomType {
	
	// This column name may need to change
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	// Maps the room_type to rooms
	@OneToMany(mappedBy = "room_type",
			cascade = CascadeType.ALL)
	private List<Room> rooms = new ArrayList<>();
	
	@OneToMany(mappedBy = "room_type",
			cascade = CascadeType.ALL)
	private List<ReservedRoom> reservedRoom = new ArrayList<>();
	
	@Column(name="description")
	private String description;
	
	@Column(name="max_capacity")
	private int maxCapacity;
}
